<script lang="ts">
	import CitySelect from "../components/CitySelect.svelte";
	import CoordinatesForm from "../components/CoordinatesForm.svelte";
	import CurrentWeather from "../components/CurrentWeather.svelte";
	import PreciseLocationButton from "../components/PreciseLocationButton.svelte";
</script>

<h1>Home page</h1>

<PreciseLocationButton />
<CitySelect />
<CoordinatesForm />
<CurrentWeather />
