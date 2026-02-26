// properties-data.js
// Base de datos de propiedades de QuintasPy

const properties = [
    // QUINTAS - SAN LORENZO
    {
        id: 'quinta-che-renda',
        name: 'Quinta Che Renda',
        slug: 'quinta-che-renda',
        type: 'quinta',
        city: 'San Lorenzo',
        region: 'Central',
        address: 'Don Antonio, JF7R+GHC, San Lorenzo 111471',
        latitude: -25.3385,  // Coordenadas aproximadas
        longitude: -57.5089,
        phone: '0981763236',
        whatsapp: '595981763236',
        instagram: 'https://www.instagram.com/p/DHwCDI_RQM6/',
        capacity: null,
        bedrooms: 0,
        bathrooms: null,
        amenities: {
            pool: true,
            poolSize: '8x4m',
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Visicooler', 'Patio empastado', 'Servicio de chopp opcional', 'Mobiliario rústico'],
        description: 'Quinta Che Renda es una excelente opción de quinta en San Lorenzo para eventos y alquiler por día, ubicada estratégicamente a pasos del Hospital Pediátrico Acosta Ñu, con fácil acceso desde Fernando de la Mora, Ñemby, Villa Elisa y Capiatá. Cuenta con piscina de 8x4 metros, quincho con parrilla, visicooler, amplio patio empastado y mobiliario rústico ideal para cumpleaños, reuniones familiares y celebraciones privadas.',
        idealFor: ['Cumpleaños', 'Reuniones familiares', 'Eventos privados', 'Asados'],
        badge: 'Popular',
        featured: true,
        rating: 4.8,
        reviews: 23,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Che-Renda/quinta-che-renda-main.webp',
            '/assets/images/properties/Quinta-Che-Renda/quinta-che-renda-fin-de-semana.webp',
            '/assets/images/properties/Quinta-Che-Renda/quinta-che-renda-quinta-asado.webp'
        ]
    },

    {
        id: 'quinta-jukeri',
        name: 'Quinta Jukeri',
        slug: 'quinta-jukeri',
        type: 'quinta',
        city: 'San Lorenzo',
        region: 'Central',
        address: 'MG69+PR9 Plaza Municipal 31 de agosto, San Lorenzo 111427',
        latitude: -25.3380,
        longitude: -57.5095,
        phone: null,
        whatsapp: null,
        instagram: null,
        capacity: 50,
        bedrooms: 0,
        bathrooms: null,
        amenities: {
            pool: true,
            poolSize: '7x4m',
            grill: true,
            wifi: true,
            tv: true,
            tvDetails: '43" con TV Box',
            sound: true,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Freezer', 'Luces en piscina', 'Cascada', 'TV Box'],
        description: 'Quinta Jukeri es una moderna quinta en San Lorenzo con piscina y equipamiento completo para eventos privados. Dispone de piscina de 7x4 metros con cascada y luces, parrilla, freezer, WiFi, TV plasma de 43" con TV Box y equipo de sonido. Con capacidad regular para 25 personas y posibilidad de fiestas de hasta 50 invitados, es ideal para cumpleaños, encuentros con amigos y celebraciones familiares.',
        idealFor: ['Cumpleaños', 'Fiestas', 'Eventos nocturnos', 'Reuniones'],
        badge: 'Equipada',
        featured: true,
        rating: 4.9,
        reviews: 18,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Jukeri/quinta-jukeri-main.webp',
            '/assets/images/properties/Quinta-Jukeri/quinta-jukeri-piscina-finde.webp',
            '/assets/images/properties/Quinta-Jukeri/quinta-jukeri-quincho.webp'
        ]
    },

    // QUINTAS - LUQUE
    {
        id: 'quinta-del-sol',
        name: 'Quinta del Sol',
        slug: 'quinta-del-sol',
        type: 'quinta',
        city: 'Luque',
        region: 'Central',
        address: 'Felix German Pérez, Luque',
        latitude: -25.2667,
        longitude: -57.4886,
        phone: '0981912832',
        whatsapp: '595981912832',
        instagram: 'https://www.instagram.com/quinta.del.sol',
        capacity: 100,
        bedrooms: 0,
        bathrooms: null,
        amenities: {
            pool: true,
            poolSize: '12x5m',
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: true,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true,
            sportsDetails: 'Canchas deportivas'
        },
        extras: ['Billar', 'PlayStation', 'Espacio techado', 'Eventos grandes'],
        description: 'Quinta del Sol es una amplia quinta en Luque para eventos y alquiler por día, ideal para bodas, 15 años, cumpleaños, eventos empresariales y celebraciones estudiantiles. Cuenta con piscina 12x5, quincho, canchas deportivas, billar, PlayStation y espacio techado para 100 personas. Es una excelente opción para quienes buscan alquiler de quinta para eventos en Luque con instalaciones completas.',
        idealFor: ['Bodas', '15 años', 'Eventos corporativos', 'Celebraciones grandes'],
        badge: 'Grande',
        featured: true,
        rating: 4.7,
        reviews: 42,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-del-Sol/quinta-del-sol-main.webp',
            '/assets/images/properties/Quinta-del-Sol/quinta-del-sol-cumpleanos-bodas.webp',
            '/assets/images/properties/Quinta-del-Sol/quinta-del-sol-quincho-para-celebraciones.webp'
        ]
    },

    {
        id: 'quinta-jara',
        name: 'Quinta Jara',
        slug: 'quinta-jara',
        type: 'quinta',
        city: 'Luque',
        region: 'Central',
        address: 'Luque 9.000m2',
        latitude: -25.2650,
        longitude: -57.4900,
        phone: '0981912832',
        whatsapp: '595981912832',
        instagram: 'https://www.instagram.com/quintajara',
        capacity: 80,
        bedrooms: 4,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: true,
            airConditioning: true,
            kitchen: true,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true,
            sportsDetails: 'Fútbol y vóley'
        },
        extras: ['Casita árbol', 'Cámaras seguridad', 'Hospedaje hasta 30 personas', 'Predio 9.000m²'],
        description: 'Quinta Jara es una espaciosa quinta en Luque con hospedaje y piscina, ubicada en un predio de 9.000 m² ideal para eventos y reuniones familiares. Dispone de 4 habitaciones climatizadas para hasta 30 personas, casita en el árbol para niños, cancha de fútbol y vóley, sistema de audio y quincho con parrilla. Perfecta para alquiler de quinta para cumpleaños, retiros y encuentros privados.',
        idealFor: ['Eventos con hospedaje', 'Retiros', 'Reuniones familiares', 'Cumpleaños'],
        badge: 'Con hospedaje',
        featured: true,
        rating: 4.9,
        reviews: 31,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Jara/quinta-jara-main.webp',
            '/assets/images/properties/Quinta-Jara/quinta-jara-celebrar-boda.webp',
            '/assets/images/properties/Quinta-Jara/quinta-jara-celebrar-cumpleano.webp'
        ]
    },

    {
        id: 'quinta-las-palmeras',
        name: 'Quinta Las Palmeras',
        slug: 'quinta-las-palmeras',
        type: 'quinta',
        city: 'Luque',
        region: 'Central',
        address: 'Isla Pucú Esquina, Lambaré 110726',
        latitude: -25.3200,
        longitude: -57.6100,
        phone: '0982138905',
        whatsapp: '595982138905',
        instagram: 'https://www.instagram.com/laspalmeras_quinta',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Hospedaje disponible'],
        description: 'Quinta Las Palmeras es una opción versátil de quinta en Luque con piscina y quincho, ideal para eventos familiares, corporativos y reuniones sociales. Ofrece espacio para celebraciones al aire libre y hospedaje, convirtiéndola en una alternativa práctica para quienes buscan alquiler de quinta cerca del centro de Luque.',
        idealFor: ['Eventos familiares', 'Corporativos', 'Reuniones sociales'],
        badge: null,
        featured: false,
        rating: 4.6,
        reviews: 15,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Las-Palmeras/quinta-las-palmeras-main.webp',
            '/assets/images/properties/Quinta-Las-Palmeras/quinta-las-palmeras-celebracion.webp',
            '/assets/images/properties/Quinta-Las-Palmeras/quinta-las-palmeras-piscina.webp'
        ]
    },

    {
        id: 'quinta-don-justo',
        name: 'Quinta Don Justo',
        slug: 'quinta-don-justo',
        type: 'quinta',
        city: 'Luque',
        region: 'Central',
        address: 'Capital casi Mariscal Sucre',
        latitude: -25.2700,
        longitude: -57.4950,
        phone: '0981547388',
        whatsapp: '595981547388',
        website: 'https://disfrutandoparaguay.com',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true,
            sportsDetails: 'Fútbol y vóley'
        },
        extras: ['Amplio patio'],
        description: 'Quinta Don Justo es una amplia quinta en Luque para todo tipo de eventos, desde cumpleaños y aniversarios hasta retiros laborales y religiosos. Dispone de piscina, cancha de fútbol y vóley, quincho con parrilla y amplio patio para actividades. Ideal para alquiler de quinta para eventos sociales y corporativos en Central.',
        idealFor: ['Retiros laborales', 'Eventos religiosos', 'Cumpleaños', 'Aniversarios'],
        badge: null,
        featured: false,
        rating: 4.5,
        reviews: 28,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Don-Justo/quinta-don-justo-main.webp',
            '/assets/images/properties/Quinta-Don-Justo/quinta-don-justo-para-fin-de-semana.webp',
            '/assets/images/properties/Quinta-Don-Justo/quinta-don-justo-piscina-celebrar.webp'
        ]
    },

    // QUINTA - CAPIATÁ
    {
        id: 'quinta-piroy',
        name: 'Quinta Piroy',
        slug: 'quinta-piroy',
        type: 'quinta',
        city: 'Capiatá',
        region: 'Central',
        address: 'Ruta 2 parada línea 40',
        latitude: -25.3583,
        longitude: -57.4456,
        phone: '0982473092',
        whatsapp: '595982473092',
        instagram: 'https://www.instagram.com/quintapiro_y',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: true,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true
        },
        extras: ['Dormitorios con baño', 'Equipo de sonido'],
        description: 'Quinta Piroy es una completa quinta en Capiatá con piscina y quincho para eventos, ideal para despedidas, celebraciones familiares y reuniones especiales. Cuenta con piscina de gran tamaño, dormitorios con baño, equipo de sonido y WiFi. Es una excelente opción de alquiler por día en Central para eventos privados.',
        idealFor: ['Despedidas', 'Celebraciones familiares', 'Eventos privados'],
        badge: null,
        featured: false,
        rating: 4.7,
        reviews: 19,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Piroy/quinta-piroy-main.webp',
            '/assets/images/properties/Quinta-Piroy/quinta-piroy-para-celebrar.webp',
            '/assets/images/properties/Quinta-Piroy/quinta-piroy-piscina-capiata.webp',
            '/assets/images/properties/Quinta-Piroy/quinta-piroy-quincho-asado.webp'
        ]
    },

    // QUINTAS - SAN BERNARDINO
    {
        id: 'parada-al-cielo',
        name: 'Quinta Parada al Cielo',
        slug: 'parada-al-cielo',
        type: 'quinta',
        city: 'San Bernardino',
        region: 'Cordillera',
        address: 'Ruta San Bernardino-Altos (700m Agua Village)',
        latitude: -25.3139,
        longitude: -57.2933,
        phone: '0981485721',
        whatsapp: '595981485721',
        instagram: 'https://www.instagram.com/paradaalcielo',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true
        },
        extras: ['Salón 300m²', 'Vista lago Ypacaraí', 'Habitaciones para hospedaje'],
        description: 'Quinta Parada al Cielo es una exclusiva quinta en San Bernardino con vista al lago Ypacaraí, ideal para bodas y eventos especiales. Cuenta con 300 m² techados, amplios espacios verdes, piscina, canchas y habitaciones para hospedaje. Es una de las mejores opciones para eventos elegantes en San Bernardino con entorno natural y atardeceres únicos.',
        idealFor: ['Bodas', 'Eventos elegantes', 'Celebraciones especiales'],
        badge: 'Vista lago',
        featured: true,
        rating: 5.0,
        reviews: 37,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Quinta-Parada-al-Cielo/parada-al-cielo-main.webp',
            '/assets/images/properties/Quinta-Parada-al-Cielo/parada-al-cielo-celebrar-bodas.webp',
            '/assets/images/properties/Quinta-Parada-al-Cielo/parada-al-cielo-cumpleaños.webp'
        ]
    },

    // CABAÑAS - CAACUPÉ
    {
        id: 'tramonto-cabanas',
        name: 'Tramonto Cabañas',
        slug: 'tramonto-cabanas',
        type: 'cabana',
        city: 'Caacupé',
        region: 'Cordillera',
        address: 'Ruta Caacupé - Atyrá, Caacupé 0000',
        latitude: -25.3867,
        longitude: -57.1381,
        phone: '0994222250',
        whatsapp: '595994222250',
        instagram: 'https://www.instagram.com/tramonto_py',
        capacity: 5,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: false,
            events: false,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Jacuzzi climatizado', 'Jardín', 'Vista al cerro', 'Atardeceres'],
        description: 'Tramonto Cabañas es una exclusiva opción de cabañas en Caacupé con piscina y jacuzzi climatizado, ideal para parejas y grupos de hasta 5 personas que buscan una escapada romántica o descanso de fin de semana en Paraguay. Ubicada sobre la ruta Caacupé–Atyrá, ofrece vistas al cerro y atardeceres inolvidables.',
        idealFor: ['Parejas', 'Escapada romántica', 'Fin de semana', 'Descanso'],
        badge: 'Romántica',
        featured: true,
        rating: 4.9,
        reviews: 52,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Tramonto/Quinta Arasari Paraguari.webp',
            '/assets/images/properties/Tramonto/Piscina Quina Arasari.webp',
            '/assets/images/properties/Tramonto/Quinta con piscina Arasari.webp'
        ]
    },

    {
        id: 'reset-glamping',
        name: 'Reset Glamping',
        slug: 'reset-glamping',
        type: 'cabana',
        city: 'Caacupé',
        region: 'Cordillera',
        address: 'Ruta Caacupé - Atyrá, Caacupé 030408',
        latitude: -25.3850,
        longitude: -57.1400,
        phone: '0982787009',
        whatsapp: '595982787009',
        instagram: 'https://www.instagram.com/resetglamping',
        capacity: 4,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: true,
            events: false,
            camping: false,
            petFriendly: true,
            sports: false
        },
        extras: ['Fogata', 'Balcón panorámico', 'Vista Cerro Kavaju (800m)'],
        description: 'Reset Glamping es una experiencia única de glamping en Caacupé con piscina privada y vista al Cerro Kavaju. Ideal para parejas o grupos pequeños que buscan desconectarse en una cabaña temática equipada con cocina, balcón panorámico y área de fogata. Una excelente opción para turismo romántico en Paraguay y escapadas pet friendly en Cordillera.',
        idealFor: ['Glamping', 'Desconexión', 'Pet-friendly', 'Parejas'],
        badge: 'Pet-friendly',
        featured: true,
        rating: 5.0,
        reviews: 44,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/reset-glamping/reset-glamping-main.webp',
            '/assets/images/properties/reset-glamping/reset-glamping-piscina-caacupe.webp'
        ]
    },

    {
        id: 'posada-terere',
        name: 'Posada Tereré',
        slug: 'posada-terere',
        type: 'posada',
        city: 'Caacupé',
        region: 'Cordillera',
        address: 'JV88+PH Caacupé 030104',
        latitude: -25.3830,
        longitude: -57.1420,
        phone: '0982562936',
        whatsapp: '595982562936',
        facebook: 'https://www.facebook.com/p/Posada-Terer%C3%A9-100063562239631/',
        capacity: 6,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: true,
            events: false,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Mesas', 'Disco de arado', 'Cerca Basílica'],
        description: 'Posada Tereré es una alternativa práctica de alquiler en Caacupé con piscina y parrilla, ubicada a pocas cuadras de la Basílica. Ideal para pasar el día en familia o disfrutar de un fin de semana con amigos, ofrece habitaciones, cocina equipada y espacio para asados. Perfecta para quienes buscan hospedaje económico en Caacupé.',
        idealFor: ['Día en familia', 'Fin de semana', 'Cerca Basílica'],
        badge: 'Económica',
        featured: false,
        rating: 4.6,
        reviews: 27,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Posada-Terere/posada-terere-main.webp',
            '/assets/images/properties/Posada-Terere/posada-terere-piscina.webp',
            '/assets/images/properties/Posada-Terere/posada-terere-quincho.webp'
        ]
    },

    {
        id: 'cabana-terrazza',
        name: 'Cabaña Terrazza',
        slug: 'cabana-terrazza',
        type: 'cabana',
        city: 'Atyrá',
        region: 'Cordillera',
        address: 'Atyrá - Caacupé',
        latitude: -25.2650,
        longitude: -57.1650,
        phone: '0976947997',
        whatsapp: '595976947997',
        instagram: 'https://www.instagram.com/terrazza_py',
        capacity: 4,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: true,
            tvDetails: 'Minicine proyector 120"',
            sound: false,
            airConditioning: true,
            kitchen: true,
            events: false,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Minicine 120"', 'Netflix', 'Fogonero', 'Vista Cerro Kavaju'],
        description: 'Cabaña Terrazza es una exclusiva cabaña romántica en Atyrá con piscina y vista al Cerro Kavaju, perfecta para parejas o grupos pequeños de hasta 4 personas. Cuenta con terraza panorámica, minicine privado con proyector Full HD, cocina equipada y ambientes climatizados. Ideal para escapadas románticas en Cordillera, aniversarios o fines de semana especiales en plena naturaleza.',
        idealFor: ['Romántica', 'Aniversarios', 'Minicine', 'Parejas'],
        badge: 'Con cine',
        featured: true,
        rating: 5.0,
        reviews: 33,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Cabana-Terrazza/cabana-terrazza-main.webp',
            '/assets/images/properties/Cabana-Terrazza/cabana-terrazza-piscina.webp',
            '/assets/images/properties/Cabana-Terrazza/cabana-terrazza-quincho-celebracion.webp'
        ]
    },

    // CABAÑAS - PARAGUARÍ
    {
        id: 'posada-cerro-hu',
        name: 'Posada Cerro Hu',
        slug: 'posada-cerro-hu',
        type: 'posada',
        city: 'Paraguarí',
        region: 'Paraguarí',
        address: 'Ciudad de Paraguarí',
        latitude: -25.6258,
        longitude: -57.1455,
        phone: '0991285863',
        whatsapp: '595991285863',
        instagram: 'https://www.instagram.com/posadacerrohu',
        capacity: 8,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: false,
            camping: true,
            petFriendly: false,
            sports: false
        },
        extras: ['Senderismo', 'Rapel', 'Tirolesa', 'Cerro Hu'],
        description: 'Posada Cerro Hu es una de las mejores opciones de cabañas en Paraguarí con senderismo y aventura. Ofrece habitaciones, cabañas temáticas y área de camping, además de actividades como trekking al Cerro Hu, rapel y tirolesa. Ideal para turismo aventura en Paraguay, escapadas familiares y grupos que buscan naturaleza, piscina y contacto directo con los cerros emblemáticos de la zona.',
        idealFor: ['Aventura', 'Trekking', 'Camping', 'Naturaleza'],
        badge: 'Aventura',
        featured: true,
        rating: 4.8,
        reviews: 61,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/posada-cerro-hu/QUINTA-CERRO-HU-MAIN.jpg',
            '/assets/images/properties/posada-cerro-hu/QUINTA-CERRO-HU-PISCINA.jpg',
            '/assets/images/properties/posada-cerro-hu/QUINTA-CERRO-HU-QUINCHO.jpg',
            '/assets/images/properties/posada-cerro-hu/QUINTA-CERRO-HU-PIRIBEBUY.jpg'
        ]
    },

    {
        id: 'cabanas-maria-selva',
        name: 'Cabañas María Selva',
        slug: 'cabanas-maria-selva',
        type: 'cabana',
        city: 'Paraguarí',
        region: 'Paraguarí',
        address: 'Ruta Paraguari-Piribebuy, Villarrica 4000',
        latitude: -25.6100,
        longitude: -57.1300,
        phone: '0994622871',
        whatsapp: '595994622871',
        instagram: 'https://www.instagram.com/cabanasmariaselva_',
        capacity: 4,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: true,
            events: true,
            camping: false,
            petFriendly: false,
            sports: true
        },
        extras: ['Trekking', 'Cuaciclón', 'Restaurante', '3 piscinas', 'Entre cerros Santo Tomás y Hû'],
        description: 'Cabañas María Selva es un complejo turístico ubicado entre los cerros Santo Tomás y Hû, ideal para quienes buscan cabañas en Paraguarí con piscina y actividades al aire libre. Cuenta con 3 piscinas, habitaciones climatizadas, trekking, restaurante y amplias áreas verdes. Es una excelente opción para turismo interno en Paraguay, escapadas familiares y descanso en plena naturaleza.',
        idealFor: ['Turismo interno', 'Trekking', 'Familias', 'Naturaleza'],
        badge: null,
        featured: false,
        rating: 4.7,
        reviews: 38,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Maria-Selva/QUINTA-CHOLOLO-MAIN.webp',
            '/assets/images/properties/Maria-Selva/QUINTA-CHOLOLO-PARAGUAY.webp',
            '/assets/images/properties/Maria-Selva/QUINTA-CHOLOLO-PIRIBEBUY.webp',
            '/assets/images/properties/Maria-Selva/QUINTA-CHOLOLO-PISCINA-ARROYO.webp'
        ]
    },

    {
        id: 'posada-san-miguel',
        name: 'Posada San Miguel',
        slug: 'posada-san-miguel',
        type: 'posada',
        city: 'Paraguarí',
        region: 'Paraguarí',
        address: 'Paraguarí',
        latitude: -25.6250,
        longitude: -57.1450,
        phone: null,
        whatsapp: null,
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: false,
            grill: false,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: false,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: [],
        description: 'Posada San Miguel es una excelente opción de hospedaje en Paraguarí cerca del Cerro Hû, ideal para quienes buscan tranquilidad, naturaleza y descanso en Cordillera. Ofrece habitaciones cómodas, entorno natural y ubicación estratégica para disfrutar de senderismo y turismo interno en Paraguay. Perfecta para escapadas de fin de semana, viajes en pareja o descanso familiar.',
        idealFor: ['Descanso', 'Senderismo', 'Fin de semana', 'Parejas'],
        badge: null,
        featured: false,
        rating: 4.5,
        reviews: 12,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Posada-San-Miguel/posada-san-miguel-main.webp',
            '/assets/images/properties/Posada-San-Miguel/posada-san-miguel-celebrar-cumpleano.webp',
            '/assets/images/properties/Posada-San-Miguel/posada-san-miguel-finde-semana.webp',
            '/assets/images/properties/Posada-San-Miguel/posada-san-miguel-piscina.webp'
        ]
    },

    // CABAÑAS - SAN BERNARDINO
    {
        id: 'posada-mbokaja',
        name: 'Posada Mbokaja Cabañas',
        slug: 'posada-mbokaja',
        type: 'cabana',
        city: 'San Bernardino',
        region: 'Cordillera',
        address: 'MPHM+PQ7, San Bernardino 031608',
        latitude: -25.3205,
        longitude: -57.2850,
        phone: '0981661610',
        whatsapp: '595981661610',
        instagram: 'https://www.instagram.com/mbokajacabanas',
        capacity: 6,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: false,
            events: false,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Fogonera', 'Bicicletas', 'Monopatín eléctrico', 'Ambiente privado'],
        description: 'Posada Mbokaja es una opción exclusiva de cabañas en San Bernardino con piscina y privacidad, perfecta para parejas o familias que buscan tranquilidad. Con solo dos cabañas disponibles, ofrece ambiente íntimo, parrillas, fogonera y áreas verdes. Ideal para una escapada romántica o fin de semana relajado cerca del lago Ypacaraí.',
        idealFor: ['Privacidad', 'Parejas', 'Romántica', 'Cerca del lago'],
        badge: 'Exclusiva',
        featured: true,
        rating: 5.0,
        reviews: 29,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Posada-Mbokaja/cabana-posada-mbokaja-main.webp',
            '/assets/images/properties/Posada-Mbokaja/cabana-posada-mbokaja-paraguay.webp',
            '/assets/images/properties/Posada-Mbokaja/cabana-posada-mbokaja-piscina.webp',
            '/assets/images/properties/Posada-Mbokaja/cabana-posada-mbokaja-quincho.webp'
        ]
    },

    // HOTEL - PIRIBEBUY
    {
        id: 'hotel-chololo',
        name: 'Hotel Chololó',
        slug: 'hotel-chololo',
        type: 'hotel',
        city: 'Piribebuy',
        region: 'Cordillera',
        address: 'Ruta Paraguarí-Piribebuy Km 81',
        latitude: -25.4600,
        longitude: -57.0500,
        phone: '0994534279',
        whatsapp: '595994534279',
        instagram: 'https://www.instagram.com/hotelchololopy',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: false,
            events: true,
            camping: true,
            petFriendly: false,
            sports: true
        },
        extras: ['Mesa pool', 'Salón multiuso', 'Arroyo y cascadas', 'Restaurante', '+50 años historia'],
        description: 'Hotel Chololó es un tradicional hotel en Piribebuy con parque natural, arroyo y cascadas, ideal para desconectarse de la rutina. Con más de 50 años de historia, ofrece piscina, canchas deportivas, restaurante y áreas para eventos. Es perfecto para quienes buscan hospedaje en Cordillera con naturaleza y tranquilidad, ya sea en pareja, familia o grupos.',
        idealFor: ['Naturaleza', 'Tradición', 'Familias', 'Descanso'],
        badge: 'Tradicional',
        featured: false,
        rating: 4.6,
        reviews: 55,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/chololo/QUINTA-CHOLOLO-MAIN.webp',
            '/assets/images/properties/chololo/QUINTA-CHOLOLO-PARAGUAY.webp',
            '/assets/images/properties/chololo/QUINTA-CHOLOLO-PIRIBEBUY.webp',
            '/assets/images/properties/chololo/QUINTA-CHOLOLO-PISCINA-ARROYO.webp'
        ]
    },

    {
        id: 'complejo-boteco-santoro',
        name: 'Complejo Boteco del Santoró',
        slug: 'complejo-boteco-santoro',
        type: 'complejo',
        city: 'Altos',
        region: 'Cordillera',
        address: 'Avda. Kennedy, Altos 031607',
        latitude: -25.2600,
        longitude: -57.2600,
        phone: '0983122871',
        whatsapp: '595983122871',
        instagram: 'https://www.instagram.com/posada_santoro',
        capacity: 50,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: false,
            events: true,
            camping: true,
            petFriendly: false,
            sports: true
        },
        extras: ['Mesa pool', 'Salón multiuso', 'Vista privilegiada'],
        description: 'El Complejo Boteco del Santoró es una excelente opción para eventos y hospedaje grupal en Altos, con capacidad para grandes grupos. Cuenta con piscina, canchas deportivas, quincho y amplios espacios verdes. Ideal para retiros empresariales, encuentros institucionales, bodas y celebraciones en un entorno natural con vista privilegiada.',
        idealFor: ['Retiros empresariales', 'Eventos grandes', 'Bodas', 'Grupos'],
        badge: null,
        featured: false,
        rating: 4.7,
        reviews: 24,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Complejo-Boteco-del-Santoro/boteco-del-santoro-main.webp',
            '/assets/images/properties/Complejo-Boteco-del-Santoro/boteco-del-santoro-celebrar.webp',
            '/assets/images/properties/Complejo-Boteco-del-Santoro/boteco-del-santoro-piscina.webp'
        ]
    },

    // CABAÑAS - AREGUÁ
    {
        id: 'posada-arasy',
        name: 'Posada Arasy',
        slug: 'posada-arasy',
        type: 'posada',
        city: 'Areguá',
        region: 'Central',
        address: 'Unnamed Road, Areguá',
        latitude: -25.3094,
        longitude: -57.3853,
        phone: '0984551078',
        whatsapp: '595984551078',
        instagram: 'https://www.instagram.com/arasyaregua',
        capacity: 12,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: true,
            events: false,
            camping: false,
            petFriendly: true,
            sports: false
        },
        extras: ['Tatakuá', 'Chimenea', 'Jardines', 'Vista Lago Ypacaraí'],
        description: 'Posada Arasy es una hermosa casona colonial en Areguá con piscina y vista al Lago Ypacaraí, ideal para grupos privados de hasta 12 personas. Ubicada en zona segura, ofrece quincho con tatakuá, amplios jardines y ambiente exclusivo. Es perfecta para alquiler completo de casa en Areguá, escapadas familiares o reuniones privadas con total privacidad.',
        idealFor: ['Grupos privados', 'Vista lago', 'Pet-friendly', 'Familias'],
        badge: 'Vista lago',
        featured: true,
        rating: 4.9,
        reviews: 41,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Posada-Arasy/quinta-posada-arasy-main.webp',
            '/assets/images/properties/Posada-Arasy/quinta-posada-arasy-aregua.webp',
            '/assets/images/properties/Posada-Arasy/quinta-posada-arasy-quincho.webp'
        ]
    },

    // CABAÑAS - PIRIBEBUY
    {
        id: 'cabana-piriland',
        name: 'Cabaña Piriland',
        slug: 'cabana-piriland',
        type: 'cabana',
        city: 'Piribebuy',
        region: 'Cordillera',
        address: 'Ruta Barrero - Piribebuy',
        latitude: -25.4667,
        longitude: -57.0333,
        phone: '0985310594',
        whatsapp: '595985310594',
        instagram: 'https://www.instagram.com/piriland.py',
        capacity: 10,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: true,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: true,
            events: false,
            camping: false,
            petFriendly: true,
            sports: false
        },
        extras: ['Hidromasaje', 'Pantalla gigante', 'Arroyo privado', 'Cabaña de los 80s'],
        description: 'Piriland es un complejo de cabañas en Piribebuy con arroyo privado y piscina, ideal tanto para parejas como para grupos grandes. Ofrece opciones temáticas como la Cabaña de los 80s con hidromasaje y la Casa Azul para hasta 10 personas con quincho bar y pantalla gigante. Perfecto para escapadas románticas, vacaciones familiares y alquiler de cabañas en Cordillera con entorno natural.',
        idealFor: ['Arroyo privado', 'Temática', 'Grupos', 'Parejas'],
        badge: 'Con arroyo',
        featured: true,
        rating: 4.8,
        reviews: 47,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Cabana-Piriland/cabana-piriland-main.webp',
            '/assets/images/properties/Cabana-Piriland/cabana-piriland-parrilla-para-asado.webp',
            '/assets/images/properties/Cabana-Piriland/cabana-piriland-piscina-relajacion.webp',
            '/assets/images/properties/Cabana-Piriland/cabana-piriland-quincho-para-cumpleanos.webp'
        ]
    },

    // CABAÑAS - ARROYOS Y ESTEROS
    {
        id: 'rancho-seibert',
        name: 'Rancho Seibert',
        slug: 'rancho-seibert',
        type: 'rancho',
        city: 'Arroyos y Esteros',
        region: 'Cordillera',
        address: 'Ruta 3 km 55.5',
        latitude: -25.0500,
        longitude: -57.2500,
        phone: '0981415309',
        whatsapp: '595981415309',
        instagram: 'https://www.instagram.com/elranchoseibert',
        capacity: 8,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: true,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: true,
            kitchen: false,
            events: false,
            camping: true,
            petFriendly: false,
            sports: true
        },
        extras: ['Pesque y pague', 'Animales', 'Gimnasio', 'Granja'],
        description: 'Rancho Seibert es una experiencia completa de turismo rural en Paraguay, ideal para quienes buscan hospedaje en contacto con la naturaleza. Ubicado en Arroyos y Esteros, ofrece cabañas rústicas, piscina, camping y actividades como senderismo, pesque y pague e interacción con animales de granja. Es una excelente opción para escapadas familiares, turismo interno y días de campo.',
        idealFor: ['Turismo rural', 'Pesca', 'Animales', 'Familias'],
        badge: 'Turismo rural',
        featured: false,
        rating: 4.7,
        reviews: 34,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/Rancho-Seibert/rancho-seibert-main.webp',
            '/assets/images/properties/Rancho-Seibert/rancho-seibert-piscina.webp',
            '/assets/images/properties/Rancho-Seibert/rancho-seibert-quincho-asado.webp'
        ]
    },

    // HOTEL - SAN JOSÉ DE LOS ARROYOS
    {
        id: 'hotel-granja-vyaha',
        name: 'Hotel Granja Vy\'aha',
        slug: 'hotel-granja-vyaha',
        type: 'hotel',
        city: 'San José de los Arroyos',
        region: 'Cordillera',
        address: 'Compañía Chachindy',
        latitude: -25.5333,
        longitude: -57.1667,
        phone: '0982365795',
        whatsapp: '595982365795',
        instagram: 'https://www.instagram.com/granjahotelvyaha',
        capacity: null,
        bedrooms: null,
        bathrooms: null,
        amenities: {
            pool: true,
            grill: false,
            wifi: false,
            tv: false,
            sound: false,
            airConditioning: false,
            kitchen: false,
            events: true,
            camping: false,
            petFriendly: false,
            sports: false
        },
        extras: ['Entorno natural', 'Ideal para bodas'],
        description: 'Hotel Granja Vy\'aha es un espacio ideal para quienes buscan hotel rural en Paraguay con piscina y naturaleza. Ubicado en San José de los Arroyos, combina hospedaje tranquilo con amplias áreas verdes perfectas para bodas, eventos corporativos y celebraciones familiares. Es una excelente opción para eventos campestres en Cordillera y escapadas de fin de semana rodeado de paz y naturaleza.',
        idealFor: ['Bodas', 'Rural', 'Eventos campestres', 'Naturaleza'],
        badge: null,
        featured: false,
        rating: 4.5,
        reviews: 18,
        priceRange: 'Consultar',
        images: [
            '/assets/images/properties/quinta-vyaha/QUINTA-VYAHA-MAIN.webp',
            '/assets/images/properties/quinta-vyaha/QUINTA-VYAHA-PARAGUAY.webp',
            '/assets/images/properties/quinta-vyaha/QUINTA-VYAHA-PISCINA.webp',
            '/assets/images/properties/quinta-vyaha/QUINTA-VYAHA-QUINCHO.webp'
        ]
    }
];

// Utilidades
const getCitiesList = () => {
    const cities = [...new Set(properties.map(p => p.city))];
    return cities.sort();
};

const getPropertiesByCity = (city) => {
    return properties.filter(p => p.city === city);
};

const getPropertiesByType = (type) => {
    return properties.filter(p => p.type === type);
};

const getFeaturedProperties = () => {
    return properties.filter(p => p.featured === true);
};

const getPropertiesWithAmenity = (amenity) => {
    return properties.filter(p => p.amenities[amenity] === true);
};

const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[á]/g, 'a')
        .replace(/[é]/g, 'e')
        .replace(/[í]/g, 'i')
        .replace(/[ó]/g, 'o')
        .replace(/[ú]/g, 'u')
        .replace(/[ñ]/g, 'n')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

const getPropertyUrl = (property) => {
    const citySlug = slugify(property.city);
    return `quintas/${citySlug}/${property.slug}.html`;
};

// Exportar para usar en otros scripts (Node.js y Navegador)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        properties,
        getCitiesList,
        getPropertiesByCity,
        getPropertiesByType,
        getFeaturedProperties,
        getPropertiesWithAmenity,
        slugify,
        getPropertyUrl
    };
} else {
    window.propertiesData = {
        properties,
        getCitiesList,
        getPropertiesByCity,
        getPropertiesByType,
        getFeaturedProperties,
        getPropertiesWithAmenity,
        slugify,
        getPropertyUrl
    };
}
