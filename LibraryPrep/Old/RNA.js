if (data.range) {
    if (data.sampleType1 === 'rna') {
        if (data.species7 === 'human') {
            if (data.species9 === 'illumina') {
                if (data.testType11 === 'rnaSeq') {
                    if (data.range == 124) {
                        value = data.numberOfSamples4 * 253.5;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples4 * 207.5;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            } else if (data.species9 === 'pacBio') {
                if (data.testType12 === 'isoSeq') {
                    if (data.range == 18) {
                        value = data.numberOfSamples4 * 300;
                    }
                    if (data.range == 9) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            }
        } else if (data.species7 === 'nonHuman') {
            if (data.species14 === 'illumina') {
                if (data.testType22 === 'rnaSeq') {
                    if (data.range == 124) {
                        value = data.numberOfSamples4 * 253.5;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples4 * 207.5;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            } else if (data.species14 === 'pacBio') {
                if (data.testType23 === 'isoSeq') {
                    if (data.range == 18) {
                        value = data.numberOfSamples4 * 300;
                    }
                    if (data.range == 9) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            }
        }
    }
}
else {
    if (data.sampleType1 === 'rna') {
        if (data.species7 === 'human') {
            if (data.species9 === 'illumina') {
                if (data.testType11 === 'rnaSeq') {
                    if (data.numberOfSamples4 >= 1 && data.numberOfSamples4 <= 24) {
                        value = data.numberOfSamples4 * 253.5;
                    }
                    if (data.numberOfSamples4 >= 25 && data.numberOfSamples4 <= 48) {
                        value = data.numberOfSamples4 * 207.5;
                    }
                    if (data.numberOfSamples4 >= 49) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            } else if (data.species9 === 'pacBio') {
                if (data.testType12 === 'isoSeq') {
                    if (data.numberOfSamples4 >= 1 && data.numberOfSamples4 <= 8) {
                        value = data.numberOfSamples4 * 300;
                    }
                    if (data.numberOfSamples4 >= 9) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            }
        } else if (data.species7 === 'nonHuman') {
            if (data.species14 === 'illumina') {
                if (data.testType22 === 'rnaSeq') {
                    if (data.numberOfSamples4 >= 1 && data.numberOfSamples4 <= 24) {
                        value = data.numberOfSamples4 * 253.5;
                    }
                    if (data.numberOfSamples4 >= 25 && data.numberOfSamples4 <= 48) {
                        value = data.numberOfSamples4 * 207.5;
                    }
                    if (data.numberOfSamples4 >= 49) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            } else if (data.species14 === 'pacBio') {
                if (data.testType23 === 'isoSeq') {
                    if (data.numberOfSamples4 >= 1 && data.numberOfSamples4 <= 8) {
                        value = data.numberOfSamples4 * 300;
                    }
                    if (data.numberOfSamples4 >= 9) {
                        value = data.numberOfSamples4 * 195;
                    }
                }
            }
        }
    }

}

const ignoreIfFound = ['grandTotal9', 'grandTotal7', 'grandTotal6'] // will ignore as the equation is already applied to any of these
if (value && !ignoreIfFound.some(x => data[x])) {
    value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}