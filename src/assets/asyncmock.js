const products = [
    {
        "id": 1,
        "precio": 11407,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 105,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b0760f9031a4a048596af0900df5a55_9366/Remera_Train_Essentials_3-Tiras_Blanco_IB8151_01_laydown.jpg",
        "descripcion": "Crimson Blaze"
    },
    {
        "id": 2,
        "precio": 14851,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 110,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a740f48db4844c40860c7666b805b3ec_9366/M_DOODLE_MLT_T_Negro_IN7934_01_laydown.jpg",
        "descripcion": "Lunar Drift"
    },
    {
        "id": 3,
        "precio": 11297,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 115,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb6e59e427d94f56bab6f449efe6241e_9366/Remera_Own_the_Run_3_Tiras_Amarillo_IK4990_01_laydown.jpg",
        "descripcion": "Steel Tempest"
    },
    {
        "id": 4,
        "precio": 10107,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 120,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b4feb23cc3441658776caaa04907c4d_9366/M_AUGMENT_TEE_Negro_IN7977_01_laydown.jpg",
        "descripcion": "Lunar Drift"
    },
    {
        "id": 5,
        "precio": 10551,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 125,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/660d42e5d43e4cdaad6eaf1c0104ee1e_9366/Remera_de_Entrenamiento_Train_Essentials_Feelready_Logo_Azul_IB8275_01_laydown.jpg",
        "descripcion": "Sky Runner"
    },
    {
        "id": 6,
        "precio": 12645,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 130,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf9d73fb98c34984a08caf150099dfe0_9366/Remera_Adicolor_Classics_3_Tiras_Negro_IA4845_01_laydown.jpg",
        "descripcion": "Horizon Break"
    },
    {
        "id": 7,
        "precio": 11624,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 135,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b644ccaeae74b79bdf260122f5c9e73_9366/BASIC_BOS_TEE_Gris_IV7461_01_laydown.jpg",
        "descripcion": "Solar Flare"
    },
    {
        "id": 8,
        "precio": 10396,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 140,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5c924fa2af34c8caa423dda816ed03f_9366/M_FI_FRACTAL_T_Azul_IV7002_01_laydown.jpg",
        "descripcion": "Silver Bullet"
    },
    {
        "id": 9,
        "precio": 12132,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 145,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7de73b925bd0417198a8af0900dd567e_9366/Remera_de_Entrenamiento_Designed_For_Movement_HIIT_Blanco_IB7921_01_laydown.jpg",
        "descripcion": "Stealth Panther"
    },
    {
        "id": 10,
        "precio": 1487,
        "nombre": "Remera",
        "categoria": "Remeras",
        "stock": 150,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3599a0adc744f4d8ae9ae85009f8be3_9366/Remera_Big_Badge_Of_Sport_Training_Blanco_HL8800_01_laydown.jpg",
        "descripcion": "Red Jaguar"
    },
    {
        "id": 11,
        "precio": 41008,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 155,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed067dbb02344f39b71a92803a0c9a1a_9366/Zapatillas_Gazelle_Argentina_Blanco_ID3718_01_standard.jpg",
        "descripcion": "Electric Surge"
    },
    {
        "id": 12,
        "precio": 43084,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 160,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/290a38cec5854a66bc225870f24c6d4f_9366/Zapatillas_SL_72_Sporty_and_Rich_Originals_Turquesa_JS0261_01_standard.jpg",
        "descripcion": "Shadow Eclipse"
    },
    {
        "id": 13,
        "precio": 41361,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 165,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ccada7e00e434e5bbdf17dcd05f3512b_9366/Zapatillas_Country_OG_SFTM_Negro_JH9010_01_00_standard.jpg",
        "descripcion": "Steel Tempest"
    },
    {
        "id": 14,
        "precio": 36419,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 170,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61eb3d52f14c415a8df9141109974c2a_9366/Zapatillas_Country_OG_SFTM_Granate_JH9011_01_00_standard.jpg",
        "descripcion": "Golden Horizon"
    },
    {
        "id": 15,
        "precio": 34040,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 175,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea12a67954f4083840d3d7ba5739249_9366/Zapatillas_Jabbar_Hi_Blanco_IH3183_01_standard.jpg",
        "descripcion": "Frost Edge"
    },
    {
        "id": 16,
        "precio": 40534,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 180,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4eb397e2919c4c2a872dfaf50050e3f5_9366/JABBAR_HI_Negro_IH3170_01_standard.jpg",
        "descripcion": "Sky Runner"
    },
    {
        "id": 17,
        "precio": 33332,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 185,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d2af4ef5c244e2f95f6b948c79fdedf_9366/Zapatillas_Samba_OG_Negro_IH3119_01_standard.jpg",
        "descripcion": "Neon Pulse"
    },
    {
        "id": 18,
        "precio": 37135,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 190,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05ae0ea1b75b432ebb3d73c561274178_9366/Zapatillas_Jabbar_Low_Blanco_IH5298_01_standard.jpg",
        "descripcion": "Velocity Core"
    },
    {
        "id": 19,
        "precio": 41979,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 195,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7651eb05b5024f078fcef1e2bf8244b6_9366/RIVALRY_CREPE_Violeta_IF6245_01_00_standard.jpg",
        "descripcion": "Horizon Break"
    },
    {
        "id": 20,
        "precio": 34395,
        "nombre": "Zapatillas",
        "categoria": "Zapatillas",
        "stock": 200,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82d433384c7c435f9a2fa96d0101d323_9366/Zapatillas_Handball_Spezial_Azul_BD7633_01_00_standard.jpg",
        "descripcion": "Ocean Wave"
    },
    {
        "id": 21,
        "precio": 21895,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 205,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d64cae83dce4b9f9f677c2ab93b95bf_9366/M_BL_FT_SWT_Negro_IV4593_01_laydown.jpg",
        "descripcion": "Mystic Stream"
    },
    {
        "id": 22,
        "precio": 28519,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 210,
        "img": "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce53cf486459413193610ba0b5150a4b_9366/Buzo_con_Capucha_Monogram_Verde_IZ2528_01_laydown.jpg",
        "descripcion": "Tropical Zephyr"
    },
    {
        "id": 23,
        "precio": 21646,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 215,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a14ea49997934b7f85ec16576b928038_9366/Buzo_Essentials_Logo_Grande_Felpa_Francesa_Rosa_IX0147_01_laydown.jpg",
        "descripcion": "Mystic Stream"
    },
    {
        "id": 24,
        "precio": 20040,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 220,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0b1d43e170e462b8fc2aefc0116c516_9366/Buzo_con_Capucha_Essentials_3_Tiras_Felpa_Francesa_Azul_IC0434_01_laydown.jpg",
        "descripcion": "Sky Runner"
    },
    {
        "id": 25,
        "precio": 28940,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 225,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c72be5444d74daf94efad1700b8d6e9_9366/Campera_Deportiva_Ajustada_AEROREADY_Sereno_Cut_3_Tiras_Azul_H28903_01_laydown.jpg",
        "descripcion": "Red Jaguar"
    },
    {
        "id": 26,
        "precio": 28810,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 230,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/88dd170b9f78407fb802ae4d0118c153_9366/Buzo_con_Capucha_Adicolor_Essentials_Trifolio_Azul_HK0095_01_laydown.jpg",
        "descripcion": "Mystic Stream"
    },
    {
        "id": 27,
        "precio": 29444,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 235,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/71600f53c4d94c899e90ad3a0112465c_9366/Buzo_con_Capucha_adidas_Sportswear_Future_Icons_Logo_Estampado_Negro_H39801_01_laydown.jpg",
        "descripcion": "Stealth Panther"
    },
    {
        "id": 28,
        "precio": 25024,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 240,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e831c3775d64e86be18ad9f00d69f76_9366/Buzo_Essentials_Logo_Grande_Azul_HE1840_01_laydown.jpg",
        "descripcion": "Savanna Hunter"
    },
    {
        "id": 29,
        "precio": 28202,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 245,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b62abf48823f4647b5e9adde0072329e_9366/Buzo_con_Capucha_Essentials_FeelVivid_Felpa_Francesa_de_Algodon_Hombro_Caido_Gris_HE4358_01_laydown.jpg",
        "descripcion": "Savanna Hunter"
    },
    {
        "id": 30,
        "precio": 29729,
        "nombre": "Buzo",
        "categoria": "Buzos",
        "stock": 250,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa47ae8d81d344b6bf0faf2501282ff0_9366/Buzo_Sports_Club_Verde_IM1313_01_laydown.jpg",
        "descripcion": "Twilight Ember"
    }
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2500)
    })
}