if (data.sampleType2 === 'singleCell') {
    if (data.species15 === 'human') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 11.32;
                }
            } else if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 791 * 11.32;
                }
            }
        }
    } else if (data.species15 === 'mouse') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 280 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 280 * 11.32;
                }
            } else if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 521 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 521 * 11.32;
                }
            }
        }
    } else if (data.species15 === 'other') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            } else if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 11.32;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 1.52;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 791 * 11.32;
                }
            }
        }
    }
}

const ignoreIfFound = [] // will ignore as the equation is already applied to any of these
if(value  && !ignoreIfFound.some(x => data[x])) {
  value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}