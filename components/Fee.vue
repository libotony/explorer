<template>
    <span>
        <span v-b-tooltip.hover="val">{{pretty}}</span>
        <small class="text-secondary">Gwei</small>
    </span>
</template>
<script lang="ts">
import BigNumber from 'bignumber.js';
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Amount extends Vue {
    @Prop({ default: '0' })
    amount!: string 

    get pretty() {
        return new BigNumber(this.amount).div('1' + '0'.repeat(9)).toFormat(0)
    }

    get val() {
        return (new BigNumber(this.amount).div('1' + '0'.repeat(18)).toFormat()) + ' VTHO'
    }
}
</script>