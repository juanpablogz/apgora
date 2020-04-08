<template>
  <div class="schedule-video-call">
    <h1>Schedule Video call</h1>
    <div>
      <mdb-input :value="handlePickersValue()" @click.native="$refs.datePicker.open()" />
      <mdb-date-picker ref="datePicker" disable-input v-model="datePickerValue" @close="$refs.timePicker.open()" />
      <mdb-time-picker ref="timePicker" disable-input v-model="timePickerValue" />
    </div>    
  </div>
</template>

<script>
import { mdbDatePicker, mdbTimePicker, mdbInput } from 'mdbvue';
export default {
  name: 'ScheduleVideoCall',
  components: {
    mdbDatePicker,
    mdbTimePicker,
    mdbInput
  },  
  data() {
    return {
      datePickerValue: '',
      timePickerValue: ''      
    }
  },
  methods: {
    handlePickersValue() {
      let output = 'Pick date and time'
      if (this.datePickerValue && this.timePickerValue) output = `${this.datePickerValue}, ${this.timePickerValue}`
      else if (this.datePickerValue) output = this.datePickerValue
      else if (this.timePickerValue) output = this.timePickerValue
      return output
    }
  },
}
</script>

<style>

</style>