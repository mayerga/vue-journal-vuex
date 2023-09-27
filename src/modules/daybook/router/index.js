

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),

//Aquí colocamos todas las rutas que van a estar disponibles dentro del módulo del daybook
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id', //Recibe un id como argumento
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry-view" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}