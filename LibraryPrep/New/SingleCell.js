if (data.range) {
    if (data.sampleType1 === 'singleCell') {
        if (data.species8 === 'human') {
            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }
                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }
        }
        else if (data.species8 === 'mouse') {
            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }

                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }

        }
        else if (data.species8 === 'other') {

            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }

                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.range == 14) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.range == 58) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }

        }
    }
}
else {
    if (data.sampleType1 === 'singleCell') {
        if (data.species8 === 'human') {
            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }
                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }
        } else if (data.species8 === 'mouse') {
            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }

                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }

        } else if (data.species8 === 'other') {

            if (data.specimenType5 === 'crypreservedCells') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scRna') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2122;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1876;
                        }
                    }
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 1984;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1847.5;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3518.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3223.5;
                        }
                    }

                }
            } else if (data.specimenType5 === 'tissue') {
                if (data.species10 === 'illumina') {
                    if (data.testType14 === 'scAtac') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 2024.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 1888;
                        }
                    }
                    if (data.testType14 === 'scMultiome') {
                        if (data.numberOfSamples5 >= 1 && data.numberOfSamples5 <= 4) {
                            value = data.numberOfSamples5 * 3542.5;
                        }
                        if (data.numberOfSamples5 >= 5 && data.numberOfSamples5 <= 8) {
                            value = data.numberOfSamples5 * 3256;
                        }
                    }
                }
            }

        }
    }
}

const ignoreIfFound = ['grandTotal9', 'grandTotal7'] // will ignore as the equation is already applied to any of these
if (value && !ignoreIfFound.some(x => data[x])) {
    value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}