<template>
  <div>
    <header id="home_header">
        <section id="titre" class="w-100">
            <div class="mt-5">
                <h1 class="mb-4 text-primary">Giuliana GODAIL FABRIZIO</h1>
                <h3 class="text-secondary">Étudiante en informatique</h3>
            </div>
            <img src="images/developer.webp" class="image_accueil">
        </section>
    </header>

    <main id="home_main" class="d-flex justify-content-center pb-5 pt-5">
          <div class="col-md-7">
              <section id="formation" class="mb-5 text-center">
                  <h5 class="mb-3">À propos de moi</h5>
                  <p class="mb-4">{{ about_me }}</p>

                  <a class="btn btn-outline-primary rounded-pill w-25" href="projets.html" role="button">
                      Consulter mes projets
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                          class="bi bi-arrow-right-circle mb-1" viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                      </svg>
                  </a>
              </section>

              <section id="experiences_professionnelles" class="mb-5 text-center">
                  <h5 class="mb-3">Expériences professionnelles</h5>
                  <p class="mb-4">{{ professional_experience }}</p>
              </section>

              <section id="loisirs" class="mb-5 text-center">
                  <h5 class="mb-3">Loisirs</h5>
                  <p>{{ hobbies }}</p>
              </section>

              <div class="text-center">
                  <!-- TODO mettre le bon lien -->
                  <a class="btn btn-primary w-25"
                      :href="cv_link"
                      role="button">
                      Télécharger mon CV
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                          class="bi bi-download mb-1" viewBox="0 0 16 16">
                          <path
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                          <path
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                      </svg>
                  </a>
              </div>
          </div>
      </main>
    </div>
</template>


<script>
import variables from '../variables.js';

export default {
  name: 'HomeView',

  data: () => ({
    about_me: "",
    professional_experience: "",
    hobbies: "",
    cv_link: "",
  }),

  created() {
    this.about_me = variables.about_me;
    this.professional_experience = variables.professional_experience;
    this.hobbies = variables.hobbies;
    this.cv_link = variables.cv_link;
  }
}

</script>
