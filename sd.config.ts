import StyleDictionary from "style-dictionary"
import { formats, transformGroups } from "style-dictionary/enums"

const THEMES = ["light", "dark"]
const PREFIX = "sd"

const createStyleDictionaryConfig = (theme: string) => {
  const isLight = theme === "light"
  const src = isLight ? `!(*.${THEMES.join("|*.")})` : `*.${theme}`

  return {
    source: [`tokens/${src}.{json,json5}`],
    platforms: {
      css: {
        transformGroup: transformGroups.css,
        prefix: PREFIX,
        buildPath: "dist/css/",
        files: [
          {
            destination: `variables.${theme}.css`,
            format: formats.cssVariables,
            options: {
              selector: `.${PREFIX}--theme-${theme} { color-scheme: ${theme}; }\n\n:root, :host, .${PREFIX}--theme-${theme}`,
              outputReferences: true,
            },
          },
        ],
      },
      json: {
        transformGroup: transformGroups.web,
        prefix: PREFIX,
        buildPath: "dist/json/",
        files: [
          { destination: `properties.${theme}.json`, format: formats.json },
        ],
      },
    },
  }
}

const buildThemes = (async () => {
  console.log("Build started...")
  console.log("\n==============================================")

  for (const theme of THEMES) {
    const sd = new StyleDictionary(createStyleDictionaryConfig(theme))
    await sd.buildAllPlatforms()
  }

  console.log("\n==============================================")
  console.log("\nBuild completed!")
})()

export default buildThemes
