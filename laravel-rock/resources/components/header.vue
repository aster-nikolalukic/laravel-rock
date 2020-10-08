
<template>
    <div>
      THIS IS HEADER
    </div>
</template>

<script lang="ts">

import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class myHeader extends Vue {
    // COol
    constructor() {
      super()
      console.log('constructiong myHeader vue component....')
    }

    data() {
      return {
        test: 'n'
      }
    }

}

</script>
