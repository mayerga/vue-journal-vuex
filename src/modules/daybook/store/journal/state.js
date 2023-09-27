//çEs reactivo y cuando se cambie, notificamos a todos los componentes donde estén escuchando estos cambios

export default() => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //1234643546543
            date: new Date().toDateString(), // sat 23, julio
            text: 'Hola que tal como estas yo esoy bien oero y tu estás bien. No se, aquí aprendiendo Vue, pero me está costando. Solo se puede aprender picando codigo y picando código, no hay más',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //1234643546543
            date: new Date().toDateString(), // sat 23, julio
            text: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, //1234643546543
            date: new Date().toDateString(), // sat 23, julio
            text: 'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín',
            picture: null,
        }
    ]
})