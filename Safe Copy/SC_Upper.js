if (data.novaSeqX || data.novaSeq6000 || data.nextSeq2000) {
    if (data.species15 === 'human') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 560;
                    }
                }else if(data.testType28 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 560;
                    }
                }else if(data.testType28 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 560;
                    }
                }
            }else if(data.testType24 === 'scAtac'){
                if (data.testType28 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType28 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType28 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 250;
                    }
                }
            }else if(data.testType24 === 'scMultiome'){
                if (data.testType28 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 791;
                    }
                }else if(data.testType28 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 791;
                    }
                }else if(data.testType28 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 791;
                    }
                }
            }
        }
    }else if(data.species15 === 'mouse'){
        if (data.species16 === 'illumina') {
            if (data.testType41 === 'scRna') {
                if (data.testType30 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 280;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 280;
                    }
                }else if(data.testType30 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 280;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 280;
                    }
                }else if(data.testType30 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 280;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 280;
                    }
                }
            }else if(data.testType41 === 'scAtac'){
                if (data.testType30 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType30 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType30 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 250;
                    }
                }
            }else if(data.testType41 === 'scMultiome'){
                if (data.testType30 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 521;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 521;
                    }
                }else if(data.testType30 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 521;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 521;
                    }
                }else if(data.testType30 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 521;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 521;
                    }
                }
            }
        }
    }else if(data.species15 === 'other'){
        if (data.species16 === 'illumina') {
            if (data.testType42 === 'scRna') {
                if (data.testType31 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 560;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 560;
                    }
                }else if(data.testType31 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 560;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 560;
                    }
                }else if(data.testType31 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 560;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 560;
                    }
                }
            }else if(data.testType42 === 'scAtac'){
                if (data.testType31 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 250;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType31 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 250;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 250;
                    }
                }else if(data.testType31 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 250;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 250;
                    }
                }
            }else if(data.testType42 === 'scMultiome'){
                if (data.testType31 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.92 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 1.28 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 1.12 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.86 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 2.30 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 2.06 * data.numberOfSamples8 * 791;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 1.52 * data.numberOfSamples8 * 791;
                    }
                }else if(data.testType31 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 2.16 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 1.88 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 1.34 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 3.36 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 3.08 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 2.46 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 4.78 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 4.38 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 3.52 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 7.86 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 5.84 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 5.38 * data.numberOfSamples8 * 791;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 4.28 * data.numberOfSamples8 * 791;
                    }
                }else if(data.testType31 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 5.48 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 4.16 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 3.02 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 2.16 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 14.28 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 9.80 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 7.56 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 4.38 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 22.06 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 15.50 * data.numberOfSamples8 * 791;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 11.32 * data.numberOfSamples8 * 791;
                    }
                }
            }
        }
    }
}
else if (data.sampleType2 === 'singleCell') {
    if (data.species15 === 'human') {
        if (data.species16 === 'illumina') {
            if (data.testType24 === 'scRna') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 1.52;
                } if (data.testType28 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 560 * 4.28;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 11.32;
                }
            } else if (data.testType24 === 'scAtac') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                } if (data.testType28 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 250 * 4.28;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            }
            else if (data.testType24 === 'scMultiome') {
                if (data.testType28 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 1.52;
                } if (data.testType28 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 791 * 4.28;
                }
                if (data.testType28 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 791 * 11.32;
                }
            }
        }
    } else if (data.species15 === 'mouse') {
        if (data.species16 === 'illumina') {
            if (data.testType41 === 'scRna') {
                if (data.testType30 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 280 * 1.52;
                } if (data.testType30 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 280 * 4.28;
                }
                if (data.testType30 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 280 * 11.32;
                }
            } else if (data.testType41 === 'scAtac') {
                if (data.testType30 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                } if (data.testType30 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 250 * 4.28;
                }
                if (data.testType30 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            }
            else if (data.testType41 === 'scMultiome') {
                if (data.testType30 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 521 * 1.52;
                } if (data.testType30 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 521 * 4.28;
                }
                if (data.testType30 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 521 * 11.32;
                }
            }
        }
    } else if (data.species15 === 'other') {
        if (data.species16 === 'illumina') {
            if (data.testType42 === 'scAtac') {
                if (data.testType31 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 250 * 1.52;
                } if (data.testType31 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 250 * 4.28;
                }
                if (data.testType31 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 250 * 11.32;
                }
            } else if (data.testType42 === 'scRna') {
                if (data.testType31 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 560 * 1.52;
                } if (data.testType31 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 560 * 4.28;
                }
                if (data.testType31 === 'nextSeq2000') {
                    value = data.numberOfSamples8 * 560 * 11.32;
                }
            } else if (data.testType42 === 'scMultiome') {
                if (data.testType31 === 'novaSeqX') {
                    value = data.numberOfSamples8 * 791 * 1.52;
                } if (data.testType31 === 'novaSeq6000') {
                    value = data.numberOfSamples8 * 791 * 4.28;
                }
                if (data.testType31 === 'nextSeq2000') {
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