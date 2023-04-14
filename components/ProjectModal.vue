<template>
  <div class="project-modal">
    <div class="modal-content">
      <div class="modal-content__header">
        Edit Project
      </div>
      <div class="modal-content__form">
        <input
          v-model="projectName"
          class="modal-content__form__input"
          type="text" 
          placeholder="Project name"
        >

        <div class="modal-content__form__buttons-area">
          <button class="modal-content__form__buttons-area__button" @click="$emit('closeModal')">
            Cancel
          </button>
          <button class="modal-content__form__buttons-area__button" @click="$emit('updateProject')">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: "ProjectModal",

  props: {
    value: {
      type: String,
      default: ""
    }
  },

  computed: {
    projectName: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project-modal {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000a1;

  .modal-content {
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    margin: 200px auto;

    &__header {
      font-size: 22px;
      color: #655858;
      font-weight: 600;
      padding: 20px;
      border-bottom: 1px solid #655858;
    }

    &__form {
      padding: 20px;

      &__input {
        width: 92%;
        border: 1px solid #dadada;
        border-radius: 5px;
        outline: none;
        padding: 15px;
        margin-top: 10px;
      }

      &__buttons-area {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        &__button {
          background: grey;
          color: white;
          width: 40%;
          padding: 15px 0px;
          border: none;
          border-radius: 5px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
        }

        &__button:hover {
          background: #c0bcbc;
        }
      }
    }
  }
}
</style>