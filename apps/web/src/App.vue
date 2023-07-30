<script setup lang="ts">
import { onMounted, ref } from "vue";

const respnseStr = ref();

const testApi = fetch("/api/hello").then(function (response) {
	//response.status表示响应的http状态码
	if (response.status === 200) {
		//json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
		return response.json();
	} else {
		return { data: {} };
	}
});

onMounted(() => {
	testApi.then((res) => {
		respnseStr.value = res.data.time;
		console.log(res);
	});
});
</script>

<template>
	<div>接口返回：{{ respnseStr }}</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
