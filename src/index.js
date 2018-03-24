import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue/dist/vue.runtime.esm.js'

import query from '@/querystring'
import App from '@/components/App'
import store from '@/store'
import { i18n, loadLanguage } from '@/i18n'

loadLanguage(navigator.language).then(x => console.log(`Language loaded: ${x}`))
if (query.url) {
	store.commit('UPDATE_URL', { url: query.url })
}
if (store.state.url) {
	store.dispatch('GET_DATA').catch(() => {
		store.commit('STOP_LOADING')
		store.commit('UPDATE_DATA', { data: [] })
		alert('Not a database url!')
	})
}
console.log(query)
new Vue({
	el: '#app',
	render: h => h(App),
	store,
	i18n
})