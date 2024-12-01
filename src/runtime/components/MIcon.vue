<template>
	<span class="material-icons">{{ props.icon }}</span>
</template>

<script setup lang="ts">
import "material-icons/iconfont/material-icons.css"
import type { MIconString } from "./MIcon"

export interface MIconProps {
	variant?: string
	icon: MIconString
}

const props = defineProps<MIconProps>()
</script>
