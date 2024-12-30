<template>
	<span :class="variantClass">{{ props.icon }}</span>
</template>

<script setup lang="ts">
import "material-icons/iconfont/material-icons.css"
import type { MIconString, MIconVariant } from "./MIcon"

const props = defineProps({
	icon: {
		type: String as PropType<MIconString>,
		required: true,
	},
	variant: {
		type: String as PropType<MIconVariant>,
		default: "",
	},
})
const variantClass = computed(() => {
	return props.variant ? "material-icons" + "-" + `${props.variant}` : "material-icons"
})
</script>
