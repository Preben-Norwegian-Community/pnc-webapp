<template>
  <users />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Users from "@/components/pages/users/Users.vue";

@Component({
  components: {
    Users
  },
})
export default class DashboardUsersView extends Vue {}
</script>
