const fs = require('fs');
const path = require('path');

const srcBaseDir = path.join(__dirname, '../stitch_floral_matrimony_portal (1)/stitch_floral_matrimony_portal');
const destBaseDir = path.join(__dirname, 'src/app');
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.ts');

function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function convertHtmlToJsx(html) {
    let jsx = html;
    // Basic replacements
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/tabindex=/g, 'tabIndex=');
    
    // SVG and special attributes
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
    jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
    jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
    jsx = jsx.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
    
    // Fix self-closing tags
    jsx = jsx.replace(/<img([^>]*)>/g, (match, attrs) => {
        if (attrs.trim().endsWith('/')) return match;
        return `<img${attrs} />`;
    });
    jsx = jsx.replace(/<input([^>]*)>/g, (match, attrs) => {
        if (attrs.trim().endsWith('/')) return match;
        return `<input${attrs} />`;
    });
    jsx = jsx.replace(/<hr([^>]*)>/g, (match, attrs) => {
        if (attrs.trim().endsWith('/')) return match;
        return `<hr${attrs} />`;
    });
    jsx = jsx.replace(/<br([^>]*)>/g, (match, attrs) => {
        if (attrs.trim().endsWith('/')) return match;
        return `<br${attrs} />`;
    });

    // Fix comments
    jsx = jsx.replace(/<!--(.*?)-->/g, '{/* $1 */}');
    
    // Replace inline styles with objects
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
        const styleObj = styles.split(';').filter(s => s.trim()).reduce((acc, style) => {
            const [key, value] = style.split(':').map(s => s.trim());
            if (key && value) {
                const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                acc.push(`${camelKey}: "${value.replace(/"/g, "'")}"`);
            }
            return acc;
        }, []);
        return `style={{ ${styleObj.join(', ')} }}`;
    });

    return jsx;
}

function extractTailwindTheme(html) {
    const match = html.match(/tailwind\.config\s*=\s*({[\s\S]*?})\s*<\/script>/);
    if (match && match[1]) {
        try {
            // It's not valid JSON, it's JS object literal string. 
            // We can extract colors, borderRadius, etc using regex or just extract the "theme: { extend: { ... } }" part
            const themeMatch = match[1].match(/theme:\s*({[\s\S]*?}),\s*plugins\s*:/) || match[1].match(/theme:\s*({[\s\S]*?})\s*}/);
            if(themeMatch) {
               return themeMatch[0];
            }
        } catch (e) {
            console.error("Failed to parse tailwind config:", e);
        }
    }
    return null;
}

function extractStyles(html) {
    const match = html.match(/<style>([\s\S]*?)<\/style>/);
    return match ? match[1] : null;
}

function processFiles() {
    if (!fs.existsSync(srcBaseDir)) {
        console.error("Source directory not found:", srcBaseDir);
        return;
    }

    const folders = fs.readdirSync(srcBaseDir);
    let allGlobalStyles = "";
    
    folders.forEach(folder => {
        const fullPath = path.join(srcBaseDir, folder);
        if (fs.statSync(fullPath).isDirectory()) {
            const codeHtmlPath = path.join(fullPath, 'code.html');
            if (fs.existsSync(codeHtmlPath)) {
                console.log(`Processing ${folder}...`);
                const htmlContent = fs.readFileSync(codeHtmlPath, 'utf8');
                
                // Extract body content
                const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);
                let bodyContent = bodyMatch ? bodyMatch[1] : "";
                
                // Convert html to jsx
                const jsxContent = convertHtmlToJsx(bodyContent);
                
                // Extract global styles
                const styles = extractStyles(htmlContent);
                if (styles) {
                    allGlobalStyles += `\n/* Styles from ${folder} */\n` + styles;
                }
                
                // Special edge cases - specific script tags, etc.
                const cleanJsx = jsxContent.replace(/<script[\s\S]*?<\/script>/gi, '');

                const componentName = folder.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
                
                // In next.js app router, the folder name becomes the route. 
                // Just use the folder name directly for the route directory
                let componentStr = `export default function ${componentName}() {\n  return (\n    <>\n${cleanJsx}\n    </>\n  );\n}\n`;

                const destFolder = folder === 'home_botanical_atelier' ? 'home' : (folder === 'login_botanical_atelier' ? 'login' : folder);
                const destDirPath = path.join(destBaseDir, destFolder);
                ensureDirSync(destDirPath);
                
                const destFilePath = path.join(destDirPath, 'page.tsx');
                fs.writeFileSync(destFilePath, componentStr, 'utf8');
                console.log(`Generated ${destFilePath}`);
            }
        }
    });

    if (allGlobalStyles) {
        const globalCssPath = path.join(destBaseDir, 'globals.css');
        if (fs.existsSync(globalCssPath)) {
            let cssContent = fs.readFileSync(globalCssPath, 'utf8');
            if (!cssContent.includes('/* Styles from ')) {
                cssContent += `\n${allGlobalStyles}\n`;
                fs.writeFileSync(globalCssPath, cssContent, 'utf8');
                console.log('Appended global styles to src/app/globals.css');
            }
        }
    }
}

processFiles();
