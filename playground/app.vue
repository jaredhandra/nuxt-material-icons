<template>
	<!--	<div class="container"> -->
	<!--		<div class="card"> -->
	<!--			<div class="options"> -->
	<!--				<div> -->
	<!--					<USelect -->
	<!--						v-model="selectedVariant" -->
	<!--						:options="variants" -->
	<!--					/> -->
	<!--				</div> -->
	<!--			</div> -->
	<!--			<div class="icon-view"> -->
	<!--				<MIcon -->
	<!--					:variant="selectedVariant" -->
	<!--					icon="pie_chart" -->
	<!--				/> -->
	<!--			</div> -->
	<!--			<div class="output"> -->
	<!--				<pre><code>{{ options }}</code></pre> -->
	<!--			</div> -->
	<!--		</div> -->
	<!--	</div> -->
	<UContainer class="h-32">
		<UCard>
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
					Material Icon Selection:
					<USelect
						v-model="selectedVariant"
						:options="variants"
						placeholder="Material Icon Style Variant"
					/>
				</div>
			</div>
			<div class="flex justify-center">
				<div class="">
					<MIcon
						:variant="selectedVariant"
						icon="pie_chart"
						style="font-size: 72px"
					/>
				</div>
			</div>

			<template #footer>
				<div class="h-8">
					<pre><code>{{ options }}</code></pre>
				</div>
			</template>
		</UCard>
	</UContainer>
</template>

<script setup>
import { useRuntimeConfig } from "#app"

const options = useRuntimeConfig().public.mi
const variants = ref([
	{ value: "", label: "Default" },
	{ value: "outlined", label: "Outlined" },
	{ value: "round", label: "Round" },
	{ value: "sharp", label: "Sharp" },
	{ value: "two-tone", label: "Two Tone" }])
const selectedVariant = ref(null)
</script>

<style>
body {
  margin: 80px;
  background: #2A3D45;
  font-family: Helvetica, Arial, sans-serif;
  color: white;
}

.container {
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.card {
  margin: 80px auto;
  padding: 20px;
  background: #A39A92;
  border: 1px solid #4B4D60;
  border-radius: 0.5em;
  width: auto;
  height: auto;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
