import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit"

// Module options TypeScript interface definition
export interface ModuleOptions {
	defaultSize: string | number
	componentName: string
	iconType: string
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "nuxt-material-icons",
		configKey: "mi",
		compatibility: {
			nuxt: ">=3.0.0",
		},
	},

	// Default configuration options of the Nuxt module
	defaults: {
		componentName: "MIcon",
	},
	setup(_options, _nuxt) {
		const resolver = createResolver(import.meta.url)
		addComponent({
			name: _options.componentName,
			filePath: resolver.resolve("runtime/components/MIcon.vue"),
		})
	},
})
