if (data.range) {
    if (data.sampleType1 === 'dna') {
        if (data.species3 === 'human') {
            if (data.species4 === 'illumina') {
                if (data.testType6 === 'exome') {
                    if (data.testType7 == 6) {
                        if (data.range == 128) {
                            value = data.numberOfSamples3 * 280;
                        }
                        if (data.range == 1948) {
                            value = data.numberOfSamples3 * 195;
                        }
                        if (data.range == 49) {
                            value = data.numberOfSamples3 * 170;
                        }
                    } else if (data.testType7 == 2) {
                        if (data.range == 120) {
                            value = data.numberOfSamples3 * 355;
                        }
                        if (data.range == 2148) {
                            value = data.numberOfSamples3 * 275;
                        }
                        if (data.range == 49) {
                            value = data.numberOfSamples3 * 245;
                        }
                    }
                } else if (data.testType6 === 'srGenome') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 180;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 135;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples3 * 115;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 200;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 130;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples3 * 110;
                    }
                } else if (data.testType6 === 'pGx') {
                    if (data.testType10 === 48) {
                        value = data.numberOfSamples3 * 175;
                    }
                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType9 === 'lrGenome') {
                    if (data.range == 110) {
                        value = data.numberOfSamples3 * 290;
                    }
                    if (data.range == 1120) {
                        value = data.numberOfSamples3 * 225;
                    }
                    if (data.range == 21) {
                        value = data.numberOfSamples3 * 210;
                    }
                }
            }
        } else if (data.species3 === 'nonHuman') {
            if (data.species6 === 'illumina') {
                if (data.testType8 === 'srGenome') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 180;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 135;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples3 * 115;
                    }
                } else if (data.testType8 === 'wholeGenomeBisulfite') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 200;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 130;
                    }
                    if (data.range == 49) {
                        value = data.numberOfSamples3 * 110;
                    }

                }
            } else if (data.species6 === 'pacBio') {
                if (data.testType21 === 'lrGenome') {
                    if (data.range == 110) {
                        value = data.numberOfSamples3 * 290;
                    }
                    if (data.range == 1120) {
                        value = data.numberOfSamples3 * 225;
                    }
                    if (data.range == 21) {
                        value = data.numberOfSamples3 * 210;
                    }
                }

            }
        }
    }
} else {
    if (data.sampleType1 === 'dna') {
        if (data.species3 === 'human') {
            if (data.species4 === 'illumina') {
                if (data.testType6 === 'exome') {
                    if (data.testType7 === 6) {
                        if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 18) {
                            value = data.numberOfSamples3 * 280;
                        }
                        if (data.numberOfSamples3 >= 19 && data.numberOfSamples3 <= 48) {
                            value = data.numberOfSamples3 * 195;
                        }
                        if (data.numberOfSamples3 >= 49) {
                            value = data.numberOfSamples3 * 170;
                        }
                    } else if (data.testType7 === 2) {
                        if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 20) {
                            value = data.numberOfSamples3 * 355;
                        }
                        if (data.numberOfSamples3 >= 21 && data.numberOfSamples3 <= 48) {
                            value = data.numberOfSamples3 * 275;
                        }
                        if (data.numberOfSamples3 >= 49) {
                            value = data.numberOfSamples3 * 245;
                        }
                    }
                } else if (data.testType6 === 'srGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 180;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 135;
                    }
                    if (data.numberOfSamples3 >= 49) {
                        value = data.numberOfSamples3 * 115;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 200;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 130;
                    }
                    if (data.numberOfSamples3 >= 49) {
                        value = data.numberOfSamples3 * 110;
                    }
                } else if (data.testType6 === 'pGx') {
                    if (data.testType10 === 48) {
                        value = data.numberOfSamples3 * 175;
                    }
                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType9 === 'lrGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 10) {
                        value = data.numberOfSamples3 * 290;
                    }
                    if (data.numberOfSamples3 >= 11 && data.numberOfSamples3 <= 20) {
                        value = data.numberOfSamples3 * 225;
                    }
                    if (data.numberOfSamples3 >= 21) {
                        value = data.numberOfSamples3 * 210;
                    }
                }
            }
        } else if (data.species3 === 'nonHuman') {
            if (data.species6 === 'illumina') {
                if (data.testType8 === 'srGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 180;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 135;
                    }
                    if (data.numberOfSamples3 >= 49) {
                        value = data.numberOfSamples3 * 115;
                    }
                } else if (data.testType8 === 'wholeGenomeBisulfite') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 200;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 130;
                    }
                    if (data.numberOfSamples3 >= 49) {
                        value = data.numberOfSamples3 * 110;
                    }

                }
            } else if (data.species6 === 'pacBio') {
                if (data.testType21 === 'lrGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 10) {
                        value = data.numberOfSamples3 * 290;
                    }
                    if (data.numberOfSamples3 >= 11 && data.numberOfSamples3 <= 20) {
                        value = data.numberOfSamples3 * 225;
                    }
                    if (data.numberOfSamples3 >= 21) {
                        value = data.numberOfSamples3 * 210;
                    }
                }

            }
        }
    }

}

const ignoreIfFound = ['grandTotal9', 'grandTotal7', 'grandTotal6', 'grandTotal5'] // will ignore as the equation is already applied to any of these
if (value && !ignoreIfFound.some(x => data[x])) {
    value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}