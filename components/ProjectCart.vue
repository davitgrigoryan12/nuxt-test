<template>
  <div class="project">
    <div class="project__first-part">
      <img
        class="project__first-part__logo"
        :src="projectData.logo_url" 
        alt="project-logo"
      >
      <div class="project__first-part__name" @click="$emit('openEditModal')">
        {{ projectData.name }}
      </div>
    </div>

    <div class="project__second-part">
      <div v-if="projectData.is_active" class="project__second-part__active-status">
        Active
      </div>
      <div v-else class="project__second-part__inactive-status">
        Inactive
      </div>
    </div>

    <div class="project__third-part">
      <div class="project__third-part__labels">
        <div>time this week</div>
        <div>this month</div>
        <div>total</div>
      </div>
      <div class="project__third-part__times">
        <div>{{ convertHMS(projectData.spent_sec_all_time) }}</div>
        <div>{{ convertHMS(projectData.spent_sec_all_time) }}</div>
        <div>{{ convertHMS(projectData.spent_sec_all_time) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCart",

  props: {
    projectData: {
      type: Object,
      default: {}
    }
  },

  methods: {
    convertHMS(value) {
      const sec = parseInt(value, 10);
      let hours   = Math.floor(sec / 3600);
      let minutes = Math.floor((sec - (hours * 3600)) / 60);
      let seconds = sec - (hours * 3600) - (minutes * 60);
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}

      return hours+':'+minutes+':'+seconds;
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;

  &__first-part {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__logo {
      width: 50px;
      height: 50px;
    }

    &__name {
      margin-left: 15px;
      font-weight: 600;
      cursor: pointer;
    }
  }

  &__second-part {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    &__active-status {
      color: green;
    }

    &__inactive-status {
      color: red;
    }
  }

  &__third-part {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__times {
      margin-left: 20px;
    }
  }
}
</style>