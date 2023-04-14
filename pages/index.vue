<template>
  <div class="home-container">
    <div class="projects-area">
      <ProjectCart
        v-for="project in projects"
        :key="project.id"
        :projectData="project"
        @openEditModal="openEditModal(project)"
      />
    </div>
    <ProjectModal
      v-if="projectModal"
      v-model="projectName"
      @closeModal="closeModal"
      @updateProject="updateProject"
    />
  </div>
</template>

<script>
import { getCookie } from '../utils/helper';
export default {
  name: 'IndexPage',

  layout: 'mainLayout',

  data() {
    return {
      token: "",
      projectName: "",
      editingProjectId: null,
      projectModal: false
    }
  },

  mounted() {
    this.token = getCookie('token', document.cookie);
    if (!this.token) this.$router.push("/login");
  },

  methods: {
    openEditModal(project) {
      this.projectName = project.name
      this.editingProjectId = project.id
      this.projectModal = true
    },

    closeModal() {
      this.projectName = ""
      this.editingProjectId = null
      this.projectModal = false
    },

    updateProject() {
      this.$axios.$put(`https://api.quwi.com/v2/projects-manage/update?id=${this.editingProjectId}`,
        { name: this.projectName },
        { headers: {"Authorization" : `Bearer ${this.token}`} }
      )
        .then((res) => {
          this.projectName = ""
          this.projectModal = false
          this.$nuxt.refresh();
        })
        .catch(err => {
          console.error(err.message)
        })
    }
  },

  async asyncData({ req, $axios, nuxtState }) {
    const accessToken = nuxtState?.data?.[0].token || getCookie('token', req?.headers?.cookie);
    const result = { token: accessToken, projects: [] };

    try {
      const { projects } = await $axios.$get(
        "https://api.quwi.com/v2/projects-manage/index?filters[is_active]=1&sort=dta_create",
        { headers: {"Authorization" : `Bearer ${accessToken}`} }
      )
      result.projects = projects;
      return result;
    } catch(error) {
      return result;
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: #f2f2f2;
  height: 90vh;
  padding-top: 10vh;
  display: flex;
  justify-content: center;

  .projects-area {
    width: 50%;
  }
}
</style>
