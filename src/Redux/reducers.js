const myStore = {
    contenttitle: 'Selamat datang di Aplikasi HEBI',    
    datecontent: '07 Mei 2019',
    greating: 'Halo, Semua!',
    content:'Selamat mencoba aplikasi HEBI (Health and Business) News. HEBI News dibuat dengan konsep menggabungkan informasi kesehatan dan bisnis dimana dimaksudkan agar pembaca atau pengguna aplikasi tetap memperhatikan kesehatan dengan selalu mendapat update tips-tips seputar kesehatan walaupun sibuk dengan aktifitas bisnis. Aplikasi ini masih baru dan tentunya banyak kekurangan tapi semoga menyenangkan.',
    closing:'Regards, HEBI Team.', 
    bussinesdata:[],
    healthdata:[]
}

const myReducer = (state = {...myStore}, action) => {
    switch (action.type){

        case('BUSSINESDATA'):
            return({
                ...state,
                bussinesdata:action.payload
            })
        
        case('HEALTHDATA'):
            return({
                ...state,
                healthdata:action.payload
            })

        default:
            return state;
    }

}

export default myReducer;