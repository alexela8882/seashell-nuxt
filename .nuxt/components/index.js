export { default as Loading } from '../../components/Loading.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as ErrorComponent } from '../../components/asyncComponents/ErrorComponent.vue'
export { default as ForbiddenPage } from '../../components/asyncComponents/ForbiddenPage.vue'
export { default as LoadingComponent } from '../../components/asyncComponents/LoadingComponent.vue'
export { default as NavBar } from '../../components/layouts/NavBar.vue'
export { default as SavingSnackbar } from '../../components/layouts/SavingSnackbar.vue'
export { default as Snackbar } from '../../components/layouts/Snackbar.vue'
export { default as Footer } from '../../components/webportal/Footer.vue'
export { default as Navbar } from '../../components/webportal/Navbar.vue'
export { default as EditForm } from '../../components/global/forms/EditForm.vue'
export { default as SubEditForm } from '../../components/global/forms/SubEditForm.vue'
export { default as Cards } from '../../components/asyncComponents/users/UserCards/Cards.vue'

export const LazyLoading = import('../../components/Loading.vue' /* webpackChunkName: "components/Loading" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/VuetifyLogo" */).then(c => c.default || c)
export const LazyErrorComponent = import('../../components/asyncComponents/ErrorComponent.vue' /* webpackChunkName: "components/asyncComponents/ErrorComponent" */).then(c => c.default || c)
export const LazyForbiddenPage = import('../../components/asyncComponents/ForbiddenPage.vue' /* webpackChunkName: "components/asyncComponents/ForbiddenPage" */).then(c => c.default || c)
export const LazyLoadingComponent = import('../../components/asyncComponents/LoadingComponent.vue' /* webpackChunkName: "components/asyncComponents/LoadingComponent" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/layouts/NavBar.vue' /* webpackChunkName: "components/layouts/NavBar" */).then(c => c.default || c)
export const LazySavingSnackbar = import('../../components/layouts/SavingSnackbar.vue' /* webpackChunkName: "components/layouts/SavingSnackbar" */).then(c => c.default || c)
export const LazySnackbar = import('../../components/layouts/Snackbar.vue' /* webpackChunkName: "components/layouts/Snackbar" */).then(c => c.default || c)
export const LazyFooter = import('../../components/webportal/Footer.vue' /* webpackChunkName: "components/webportal/Footer" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/webportal/Navbar.vue' /* webpackChunkName: "components/webportal/Navbar" */).then(c => c.default || c)
export const LazyEditForm = import('../../components/global/forms/EditForm.vue' /* webpackChunkName: "components/global/forms/EditForm" */).then(c => c.default || c)
export const LazySubEditForm = import('../../components/global/forms/SubEditForm.vue' /* webpackChunkName: "components/global/forms/SubEditForm" */).then(c => c.default || c)
export const LazyCards = import('../../components/asyncComponents/users/UserCards/Cards.vue' /* webpackChunkName: "components/asyncComponents/users/UserCards/Cards" */).then(c => c.default || c)
