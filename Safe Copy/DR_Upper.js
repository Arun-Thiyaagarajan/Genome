if (data.novaSeqX) {
    if (data.novaSeqX === 'novaSeqX25B300C') {
        value = 3 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX10B300C') {
        value = 4.30 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX10B200C') {
        value = 5.65 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX10B100C') {
        value = 8.60 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX15B300C') {
        value = 6.50 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX15B200C') {
        value = 9.35 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.novaSeqX === 'novaSeqX15B100C') {
        value = 14.75 * data.numberOfSamples6 * data.numberOfSamples9;
    }
} else if (data.nextSeq2000) {
    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
        value = 18.25 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
        value = 20.75 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
        value = 30.30 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
        value = 43.15 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
        value = 23.80 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
        value = 49.95 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
        value = 37.80 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
        value = 43.90 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
        value = 36.75 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
        value = 51.65 * data.numberOfSamples6 * data.numberOfSamples9;
    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
        value = 119.50 * data.numberOfSamples6 * data.numberOfSamples9;
    }
}
else if (data.sampleType2 === 'dnaRna') {
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
                if (data.testType33 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType33 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
            else if (data.testType16 === 'wholeGenomeBisulfite') {
                if (data.testType34 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType34 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
            else if (data.testType16 === 'pGx') {
                value = data.numberOfSamples6 * 2106;
            }
            else if (data.testType16 === 'rnaSeq') {
                if (data.testType35 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType35 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
        } else if (data.species11 === 'pacBio') {
            if (data.testType18 === 'lrGenome') {
                if (data.testType26 === 'revio') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 1220;
                }
                if (data.testType26 === 'sequelIIe') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
                }

            } else if (data.testType18 === 'isoSeq') {
                value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
            }
        }
    } else if (data.species5 === 'nonHuman') {
        if (data.species12 === 'illumina') {
            if (data.testType17 === 'exome') {
                if (data.testType32 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType32 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType17 === 'srGenome') {
                if (data.testType20 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType20 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType17 === 'wholeGenomeBisulfite') {
                if (data.testType37 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType37 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            } else if (data.testType17 === 'pGx') {
                value = data.numberOfSamples6 * 2106;
            } else if (data.testType17 === 'rnaSeq') {
                if (data.testType38 === 'novaSeqX') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 6.50;
                }
                if (data.testType38 === 'nextSeq2000') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 49.95;
                }
            }
        }
        else if (data.species12 === 'pacBio') {
            if (data.testType36 === 'lrGenome') {
                if (data.testType39 === 'revio') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 1220;
                }
                if (data.testType39 === 'sequelIIe') {
                    value = data.numberOfSamples6 * data.numberOfSamples9 * 852;
                }

            } else if (data.testType36 === 'isoSeq') {
                if (data.testType40 === 'sequelIIe') {
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

