if (data.sampleType2 === 'dnaRna') {
    if (data.species5 === 'human') {
        if (data.species11 === 'illumina') {
            if (data.testType16 === 'exome') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'srGenome') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'wholeGenomeBisulfite') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'pGx') {
                value = data.numberOfSamples6 * 2106;
            } else if (data.testType16 === 'rnaSeq') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
        } else if (data.species11 === 'pacBio') {
            if (data.testType16 === 'lrGenome') {
                if (data.testType19 === 'revio') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 1220;
                }
                if (data.testType19 === 'sequelIIe') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
                }

            } else if (data.testType16 === 'isoSeq') {
                value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
            }
        }
    } else if (data.species5 === 'nonHuman') {
        if (data.species11 === 'illumina') {
            if (data.testType16 === 'exome') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'srGenome') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'wholeGenomeBisulfite') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType16 === 'pGx') {
                value = data.numberOfSamples6 * 2106;
            } else if (data.testType16 === 'rnaSeq') {
                if (data.testType19 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType19 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
        } else if (data.species11 === 'pacBio') {
            if (data.testType16 === 'lrGenome') {
                if (data.testType19 === 'revio') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 1220;
                }
                if (data.testType19 === 'sequelIIe') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
                }

            } else if (data.testType16 === 'isoSeq') {
                if (data.testType19 === 'sequelIIe') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
                }
            }
        }
    }
}


const ignoreIfFound = ['grandTotal9'] // will ignore as the equation is already applied to any of these
if(value  && !ignoreIfFound.some(x => data[x])) {
  value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}
