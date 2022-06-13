<template>
  <!--
  Extends the v-system-bar component with the NYC.ID Application Header

  @url https://vuetifyjs.com/en/api/v-system-bar
  @url https://www1.nyc.gov/assets/nyc4d/html/services-nycid/look-and-feel.shtml#html-and-css
  @src https://www.figma.com/file/KTrW6Vu8TGe5xesZ81ZOHD/?node-id=2025%3A3606
  -->

  <v-system-bar
    fixed
    app
    height="var(--application-header-height)"
    class="application-header"
  >
    <!-- The logo should link to nyc-dev-web.csc.nycnet for development environments and nyc-stg-web.csc.nycnet for staging environments. -->
    <div class="application-header__link">
      <svg
        class="application-header__link"
        width="45"
        height="15"
        viewBox="0 0 45 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.063 6.55068L45 5.62603V2.81301L42.187 0H32.813L30 2.81301V0.939041L29.063 0H25.313L24.376 0.939041V2.81301L22.5 4.68904L20.626 2.81301V0.939041L19.687 0H15.937L15 0.939041L14.063 0H10.313L9.37603 0.939041V4.68904L4.68699 0H0.936986L0 0.939041V14.063L0.936986 15H4.68699L5.62603 14.063V10.313L10.313 15H14.063L15 14.063V6.56301L19.687 11.25V14.063L20.626 15H24.376L25.313 14.063V11.25L30 6.56301V12.189L32.813 15H42.187L45 12.189V9.37603L44.063 8.43699H39.374V9.37603H35.626V5.62603H39.374V6.55068H44.063Z"
          fill="white"
        />
        <path
          d="M44.3322 0.632879C44.4205 0.632879 44.4966 0.62466 44.4966 0.52192C44.4966 0.435619 44.4123 0.425345 44.3425 0.425345H44.2007V0.632879H44.3322ZM44.2027 1.03562H44.0856V0.326715H44.3548C44.5253 0.326715 44.6137 0.386304 44.6137 0.530139C44.6137 0.659592 44.5356 0.710961 44.4288 0.72329L44.6281 1.03562H44.4966L44.3137 0.731509H44.2048V1.03562H44.2027ZM44.3281 0.139728C44.0507 0.139728 43.8349 0.357537 43.8349 0.669866C43.8349 0.961646 44.024 1.2 44.3281 1.2C44.6034 1.2 44.8192 0.984249 44.8192 0.669866C44.8192 0.357537 44.6034 0.139728 44.3281 0.139728ZM44.3281 1.31096C43.9603 1.31096 43.6973 1.03562 43.6973 0.669866C43.6973 0.283564 43.989 0.0287695 44.3281 0.0287695C44.663 0.0287695 44.9548 0.283564 44.9548 0.669866C44.9568 1.05411 44.6651 1.31096 44.3281 1.31096Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="application-header__divider">|</div>

    <div class="application-header__title">MyFile NYC</div>
  </v-system-bar>
</template>

<style lang="scss">
:root {
  --application-header-grid: 8px;
  --application-header-color: #fff;
  --application-header-background-color: #000;

  --application-header-font-size: 12px;
  --application-header-font-weight: bold;
  --application-header-font-family: 'Helvetica Neue Pro', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  --application-header-font-weight: bold;

  --application-header-divider-color: #7c7f83;

  --application-header-height: 25px; // can be set dynamically in script
  --application-header-display: flex;
  --application-header-position: fixed;
  --application-header-index: 5;

  --application-header-wrap: calc(var(--application-header-grid) * 3);
}

.application-header {
  font-size: var(--application-header-font-size) !important;
  font-family: var(--application-header-font-family) !important;
  font-weight: var(--application-header-font-weight) !important;

  color: var(--application-header-color) !important;
  background-color: var(--application-header-background-color) !important;

  // min-height: var(--application-header-height);
  // display: var(--application-header-display);
  // position: var(--application-header-position);
  // z-index: var(--application-header-index);

  width: 100%;
  align-items: stretch !important;

  padding-left: var(--application-header-wrap) !important;
  padding-right: var(--application-header-wrap) !important;
}

.application-header__link {
  display: inline-flex;
  align-items: center;
}

.application-header__logo {
  display: block;
}

.application-header__divider {
  color: transparent;
  width: 0px;
  overflow: hidden;

  border-left: 1px solid var(--application-header-divider-color);
  margin-left: var(--application-header-grid);
  margin-right: var(--application-header-grid);

  @media screen and (min-width: 960px) {
    margin-left: calc(var(--application-header-grid) * 2);
    margin-right: calc(var(--application-header-grid) * 2);
  }
}

.application-header__title {
  line-height: var(--application-header-height);
}
</style>
