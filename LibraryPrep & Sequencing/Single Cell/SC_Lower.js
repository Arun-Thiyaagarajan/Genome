if (data.sampleType2 === 'singleCell') {
    if (data.species15 === 'human') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 2.54;
                }
            } else if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 2.54;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 791 * 2.54;
                }
            }
        }
    } else if (data.species15 === 'mouse') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 280 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 280 * 2.54;
                }
            } else if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 2.54;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 521 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 521 * 2.54;
                }
            }
        }
    } else if (data.species15 === 'other') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 2.54;
                }
            } else if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 2.54;
                }
            } else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 0.82;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 791 * 2.54;
                }
            }
        }
    }
}