<template>
<div>
	<h1>Profile</h1>
<p v-if="isAuth">Good</p>
<p v-else="isAuth">Bad? go login</p>
</div>
</template>
<script>

  export default {
    props: ['isAuth'],}

</script>