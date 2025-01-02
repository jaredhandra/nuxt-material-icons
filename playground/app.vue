<template>
	<UContainer class="h-32">
		<UCard style="background: #4B4D60">
			<div class="h-32 flex flex-row space-x-20">
				<div class="basis-1/2">
					Style Variant:
					<USelect
						v-model="selectedVariant"
						:options="variants"
						placeholder="Material Icon Style Variant"
					/>
				</div>
				<div class="basis-1/2">
					Icon:
					<UInput v-model="selectedIcon" />
					<ULink
						to="https://marella.github.io/material-icons/demo/"
						target="_blank"
						active-class="text-primary"
						inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
					>
						All available icons can be found here
					</ULink>
				</div>
			</div>
			<div class="flex justify-center">
				<MIcon
					:variant="selectedVariant"
					:icon="selectedIcon"
					style="font-size: 72px"
				/>
			</div>
		</UCard>
	</UContainer>
</template>

<script setup lang="ts">
import type { MIconVariant } from "../src/runtime/components/MIcon"

const variants = ref([
	{ value: "", label: "Default" },
	{ value: "outlined", label: "Outlined" },
	{ value: "round", label: "Round" },
	{ value: "sharp", label: "Sharp" },
	{ value: "two-tone", label: "Two Tone" }])
const selectedVariant = ref<MIconVariant>("")
const selectedIcon = ref("pie_chart")
</script>

<style>
body {
  margin: 80px;
  background: #2c2e40;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
}
</style>
