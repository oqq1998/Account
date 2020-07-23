<template>
  <Layout class-prefix="layout">
    <Types/>
    <Tags/>
    <Notes/>
    <NumberPad/>
  </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/Account/NumberPad.vue';
  import Types from '@/components/Account/Types.vue';
  import Notes from '@/components/Account/Notes.vue';
  import Tags from '@/components/Account/Tags.vue';
  export default {
    name: 'Account',
    components: {Tags, Notes, Types, NumberPad},
  };
</script>

<style lang="scss">

</style>