<template>
    <span>
        <span>{{total | balance}}</span>
        <span>VTHO</span>
        <template v-if="isPoS">
            <span class="text-secondary small">(</span>
            <span class="text-secondary small" v-b-tooltip.hover="feeTooltip">{{fee | hexToVal(18) | balance}}</span>
            <span class="text-secondary small">+</span>
            <span class="text-secondary small" v-b-tooltip.hover="issuanceTooltip">{{validatorReward | balance}}</span>
            <span class="text-secondary small">)</span>
        </template>
    </span>
</template>
<script lang="ts">
import BigNumber from 'bignumber.js'
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class BlockReward extends Vue {
    @Prop({ default: 0 })
    fee!: string | number

    @Prop({ default: 0 })
    issuance!: string | number

    @Prop({ default: null })
    delegator!: string | null

    get total() {
        let r = new BigNumber(this.fee)
        if (this.delegator) {
            r = r.plus(new BigNumber(this.issuance).multipliedBy(30).dividedBy(100))
        } else {
            r = r.plus(new BigNumber(this.issuance))
        }
        return r.div(new BigNumber('1e+18')).toString()
    }

    get isPoS() {
        return new BigNumber(this.issuance).isGreaterThan(0)
    }

    get validatorReward() {
        if (this.delegator) {
            return new BigNumber(this.issuance).multipliedBy(30).dividedBy(100).div(new BigNumber('1e+18')).toString()
        } else {
            return new BigNumber(this.issuance).div(new BigNumber('1e+18')).toString()
        }
    }

    get feeTooltip() {
        return "Transaction fee"
    }

    get issuanceTooltip() {
        return this.delegator? "30% of the issuance " : "100% of the issuance"
    }
}
</script>
