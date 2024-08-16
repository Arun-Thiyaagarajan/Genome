if (data.sampleType1 === 'dna') {
    if (data.testType7 == '2') {
        instance.component.data.values = [{ "label": "6-18", value: '618' }, { "label": "24-48", value: '2448' }, { "label": "54-96", value: '5496' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'srGenome') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'wholeGenomeBisulfite') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'lrGenome') {
        instance.component.data.values = [{ "label": "1-10", value: '110' }, { "label": "11-20", value: '1120' }, { "label": "21-40", value: '2140' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'srGenome') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'wholeGenomeBisulfite') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType6 === 'lrGenome') {
        instance.component.data.values = [{ "label": "1-10", value: '110' }, { "label": "11-20", value: '1120' }, { "label": "21-40", value: '2140' }]
        instance.triggerRedraw()
    }
} else if (data.sampleType1 === 'rna') {
    if (data.testType11 === 'rnaSeq') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType11 === 'isoSeq') {
        instance.component.data.values = [{ "label": "1-8", value: '18' }, { "label": "9-24", value: '924' }]
        instance.triggerRedraw()
    }
    if (data.testType11 === 'rnaSeq') {
        instance.component.data.values = [{ "label": "1-24", value: '124' }, { "label": "25-48", value: '2548' }, { "label": "49-96", value: '4996' }]
        instance.triggerRedraw()
    }
    if (data.testType11 === 'isoSeq') {
        instance.component.data.values = [{ "label": "1-8", value: '18' }, { "label": "9-24", value: '924' }]
        instance.triggerRedraw()
    }
}else if(data.sampleType1 === 'singleCell'){
    if (data.testType14 === 'scRna') {
        instance.component.data.values = [{ "label": "1-4", value: '14' }, { "label": "5-8", value: '58' }]
        instance.triggerRedraw()
    }
    if (data.testType14 === 'scAtac'){
        instance.component.data.values = [{ "label": "1-4", value: '14' }, { "label": "5-8", value: '58' }]
        instance.triggerRedraw()
    }
    if (data.testType14 === 'scMultiome') {
        instance.component.data.values = [{ "label": "1-4", value: '14' }, { "label": "5-8", value: '58' }]
        instance.triggerRedraw()
    }
    if (data.testType14 === 'scAtac') {
        instance.component.data.values = [{ "label": "1-4", value: '14' }, { "label": "5-8", value: '58' }]
        instance.triggerRedraw()
    }
    if (data.testType14 === 'scMultiome') {
        instance.component.data.values = [{ "label": "1-4", value: '14' }, { "label": "5-8", value: '58' }]
        instance.triggerRedraw()
    }
}
