if (data.range) {
    if (data.sampleType1 === 'dna') {
        if (data.species3 === 'human') {
            if (data.species4 === 'illumina') {
                if (data.testType6 === 'exome') {
                    if (data.testType7 == 6) {
                        if (data.range == 618) {
                            value = data.numberOfSamples3 * 286;
                        }
                        if (data.range == 2448) {
                            value = data.numberOfSamples3 * 199.5;
                        }
                        if (data.range == 5496) {
                            value = data.numberOfSamples3 * 171.5;
                        }
                    } else if (data.testType7 == 2) {
                        if (data.range == 618) {
                            value = data.numberOfSamples3 * 367.5;
                        }
                        if (data.range == 2448) {
                            value = data.numberOfSamples3 * 280.5;
                        }
                        if (data.range == 5496) {
                            value = data.numberOfSamples3 * 252.5;
                        }
                    }
                } else if (data.testType6 === 'srGenome') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 185.5;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 136;
                    }
                    if (data.range == 4996) {
                        value = data.numberOfSamples3 * 118.5;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 203;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 133.5;
                    }
                    if (data.range == 4996) {
                        value = data.numberOfSamples3 * 111.5;
                    }
                } else if (data.testType6 === 'pGx') {
                    if (data.testType7 === 48) {
                        value = data.numberOfSamples3 * 177.5;
                    }
                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType6 === 'lrGenome') {
                    if (data.range == 110) {
                        value = data.numberOfSamples3 * 298;
                    }
                    if (data.range == 1120) {
                        value = data.numberOfSamples3 * 227.5;
                    }
                    if (data.range == 2140) {
                        value = data.numberOfSamples3 * 213;
                    }
                }
            }
        } else if (data.species3 === 'nonHuman') {
            if (data.species4 === 'illumina') {
                if (data.testType6 === 'srGenome') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 185.5;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 136;
                    }
                    if (data.range == 4996) {
                        value = data.numberOfSamples3 * 118.5;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.range == 124) {
                        value = data.numberOfSamples3 * 203;
                    }
                    if (data.range == 2548) {
                        value = data.numberOfSamples3 * 133.5;
                    }
                    if (data.range == 4996) {
                        value = data.numberOfSamples3 * 111.5;
                    }

                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType6 === 'lrGenome') {
                    if (data.range == 110) {
                        value = data.numberOfSamples3 * 298;
                    }
                    if (data.range == 1120) {
                        value = data.numberOfSamples3 * 227.5;
                    }
                    if (data.range == 2140) {
                        value = data.numberOfSamples3 * 213;
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
                        if (data.numberOfSamples3 >= 6 && data.numberOfSamples3 <= 18) {
                            value = data.numberOfSamples3 * 286;
                        }
                        if (data.numberOfSamples3 >= 24 && data.numberOfSamples3 <= 48) {
                            value = data.numberOfSamples3 * 199.5;
                        }
                        if (data.numberOfSamples3 >= 54 && data.numberOfSamples3 <= 96) {
                            value = data.numberOfSamples3 * 171.5;
                        }
                    } else if (data.testType7 === 2) {
                        if (data.numberOfSamples3 >= 6 && data.numberOfSamples3 <= 18) {
                            value = data.numberOfSamples3 * 367.5;
                        }
                        if (data.numberOfSamples3 >= 24 && data.numberOfSamples3 <= 48) {
                            value = data.numberOfSamples3 * 280.5;
                        }
                        if (data.numberOfSamples3 >= 54 && data.numberOfSamples3 <= 96) {
                            value = data.numberOfSamples3 * 252.5;
                        }
                    }
                } else if (data.testType6 === 'srGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 185.5;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 136;
                    }
                    if (data.numberOfSamples3 >= 49 && data.numberOfSamples3 <= 96) {
                        value = data.numberOfSamples3 * 118.5;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 203;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 133.5;
                    }
                    if (data.numberOfSamples3 >= 49 && data.numberOfSamples3 <= 96) {
                        value = data.numberOfSamples3 * 111.5;
                    }
                } else if (data.testType6 === 'pGx') {
                    if (data.testType7 === 48) {
                        value = data.numberOfSamples3 * 177.5;
                    }
                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType6 === 'lrGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 10) {
                        value = data.numberOfSamples3 * 298;
                    }
                    if (data.numberOfSamples3 >= 11 && data.numberOfSamples3 <= 20) {
                        value = data.numberOfSamples3 * 227.5;
                    }
                    if (data.numberOfSamples3 >= 21 && data.numberOfSamples3 <= 40) {
                        value = data.numberOfSamples3 * 213;
                    }
                }
            }
        } else if (data.species3 === 'nonHuman') {
            if (data.species4 === 'illumina') {
                if (data.testType6 === 'srGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 185.5;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 136;
                    }
                    if (data.numberOfSamples3 >= 49 && data.numberOfSamples3 <= 96) {
                        value = data.numberOfSamples3 * 118.5;
                    }
                } else if (data.testType6 === 'wholeGenomeBisulfite') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 24) {
                        value = data.numberOfSamples3 * 203;
                    }
                    if (data.numberOfSamples3 >= 25 && data.numberOfSamples3 <= 48) {
                        value = data.numberOfSamples3 * 133.5;
                    }
                    if (data.numberOfSamples3 >= 49 && data.numberOfSamples3 <= 96) {
                        value = data.numberOfSamples3 * 111.5;
                    }

                }
            } else if (data.species4 === 'pacBio') {
                if (data.testType6 === 'lrGenome') {
                    if (data.numberOfSamples3 >= 1 && data.numberOfSamples3 <= 10) {
                        value = data.numberOfSamples3 * 298;
                    }
                    if (data.numberOfSamples3 >= 11 && data.numberOfSamples3 <= 20) {
                        value = data.numberOfSamples3 * 227.5;
                    }
                    if (data.numberOfSamples3 >= 21 && data.numberOfSamples3 <= 40) {
                        value = data.numberOfSamples3 * 213;
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