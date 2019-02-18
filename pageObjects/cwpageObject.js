module.exports = {
    url: 'http://localhost:3000/#/',


    elements: {
        menu: '.bm-burger-button',
        root: '#root',
        //AW, MW
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',
        sex: 'select[name="sexInput"]',
        race: 'select[name="racInput"]',
        height: 'input[name="hgtInput"]',
        weight:'input[name="wgtInput"]',
        hair:'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        warrantDate:'input[name="dowInput"]',
        dl:'input[name="olnInput"]',
        dlState:'input[name="olsInput"]',
        dlExpr:'input[name="oldInput"]',
        licensePlate:'input[name="licInput"]',
        licenseState:'input[name="lisInput"]',
        licenseExpr: 'input[name="lidInput"]',
       
        //CW, MW (id)
        id: 'input[name="widInput"]',
        cancelReason: 'input[name="resInput"]',
        cancelDate: 'input[name="datInput"]',

        //ALL
        save: 'saveBtn',
        clear: '#clearBtn',
        error: '#errorList',
        textBlob: 'span[name="queryBody"]'
    }
}

