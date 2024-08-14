if (data.novaSeqX || data.novaSeq6000 || data.nextSeq2000) {
    if (data.species2 === 'human') {
        if (data.species13 === 'illumina') {
            if (data.runConfiguration4 === 'standard151X17X8X151') {
                if (data.instrumentRunType === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration4 === '10XScRnaStandard'){
                if (data.instrumentRunType1 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType1 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType1 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration4 === '10XScAtacStandard'){
                if (data.instrumentRunType3 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType3 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType3 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration4 === '10XScMultiomeStandard'){
                if (data.instrumentRunType10 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                       value =  0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType10 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }
        }
    }else if(data.species2 === 'mouse'){
        if (data.species13 === 'illumina') {
            if (data.runConfiguration5 === 'standard151X17X8X151') {
                if (data.instrumentRunType7 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType7 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType7 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration5 === '10XScRnaStandard'){
                if (data.instrumentRunType2 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType2 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType2 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration5 === '10XScAtacStandard'){
                if (data.instrumentRunType8 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType8 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType8 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration5 === '10XScMultiomeStandard'){
                if (data.instrumentRunType11 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                       value =  0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType11 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType11 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }
        }
    }else if(data.species2 === 'other'){
        if (data.species13 === 'illumina') {
            if (data.runConfiguration6 === 'standard151X17X8X151') {
                if (data.instrumentRunType12 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType12 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType12 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration6 === '10XScRnaStandard'){
                if (data.instrumentRunType13 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType13 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType13 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration6 === '10XScAtacStandard'){
                if (data.instrumentRunType14 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType14 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType14 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }else if(data.runConfiguration6 === '10XScMultiomeStandard'){
                if (data.instrumentRunType15 === 'novaSeqX') {
                    if (data.novaSeqX === 'novaSeqX25B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 3;
                    } if (data.novaSeqX === 'novaSeqX10B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.30;
                    } if (data.novaSeqX === 'novaSeqX10B200C') {
                       value =  0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 5.65;
                    } if (data.novaSeqX === 'novaSeqX10B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 8.60;
                    } if (data.novaSeqX === 'novaSeqX15B300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
                    } if (data.novaSeqX === 'novaSeqX15B200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.35;
                    } if (data.novaSeqX === 'novaSeqX15B100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 14.75;
                    }
                }else if(data.instrumentRunType15 === 'novaSeq6000'){
                    if (data.novaSeq6000 === 'novaSeq6000S4300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 7.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S4200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 9.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S435C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 38.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.05;
                    } if (data.novaSeq6000 === 'novaSeq6000S2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.20;
                    } if (data.novaSeq6000 === 'novaSeq6000S2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 24.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
                    } if (data.novaSeq6000 === 'novaSeq6000S1200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 21.25;
                    } if (data.novaSeq6000 === 'novaSeq6000S1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 33.95;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp500C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 15.70;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.85;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 25.80;
                    } if (data.novaSeq6000 === 'novaSeq6000Sp100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 42.75;
                    }
                }else if(data.instrumentRunType15 === 'nextSeq2000'){
                    if (data.nextSeq2000 === 'nextSeq2000P3300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 18.25;
                    } if (data.nextSeq2000 === 'nextSeq2000P3200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 20.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P3100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 30.30;
                    } if (data.nextSeq2000 === 'nextSeq2000P350C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.15;
                    } if (data.nextSeq2000 === 'nextSeq2000P2600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 23.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
                    } if (data.nextSeq2000 === 'nextSeq2000P2200C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 37.80;
                    } if (data.nextSeq2000 === 'nextSeq2000P2100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 43.90;
                    } if (data.nextSeq2000 === 'nextSeq2000P1600C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 36.75;
                    } if (data.nextSeq2000 === 'nextSeq2000P1300C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 51.65;
                    } if (data.nextSeq2000 === 'nextSeq2000P1100C') {
                        value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 119.50;
                    }
                }
            }
        }
    }
}
else if (data.species13 === 'illumina') {
    if (data.species2 === 'human') {
        if (data.runConfiguration4 === 'standard151X17X8X151') {
            if (data.instrumentRunType === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration4 === '10XScRnaStandard') {
            if (data.instrumentRunType1 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType1 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScAtacStandard') {
            if (data.instrumentRunType3 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType3 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScMultiomeStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === 'nonStandard') {
            if (data.instrumentRunType4 === 'novaSeqX') {
                if (data.numberOfUnitsRunType === 'novaSeqX25B300C') {
                    value = '22156';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B300C') {
                    value = '12152';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B200C') {
                    value = '10844';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B100C') {
                    value = '8140';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX15B300C') {
                    value = '3238';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX15B200C') {
                    value = '2902';
                } if (data.numberOfUnitsRunType === 'novaSeqX15B100C') {
                    value = '2270';
                }
            } else if (data.instrumentRunType4 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType4 === 'miSeq') {
                if (data.numberOfUnitsRunType3 === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType3 === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    } else if (data.species2 === 'mouse') {
        if (data.runConfiguration5 === 'standard151X17X8X151') {
            if (data.instrumentRunType7 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType7 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration5 === '10XScRnaStandard') {
            if (data.instrumentRunType2 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType2 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration5 === '10XScAtacStandard') {
            if (data.instrumentRunType8 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType8 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration5 === '10XScMultiomeStandard') {
            if (data.instrumentRunType11 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType11 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration5 === 'nonStandard') {
            if (data.instrumentRunType9 === 'novaSeqX') {
                if (data.numberOfUnitsRunType5 === 'novaSeqX25B300C') {
                    value = '22156';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B300C') {
                    value = '12152';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B200C') {
                    value = '10844';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B100C') {
                    value = '8140';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX15B300C') {
                    value = '3238';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX15B200C') {
                    value = '2902';
                } if (data.numberOfUnitsRunType5 === 'novaSeqX15B100C') {
                    value = '2270';
                }
            } else if (data.instrumentRunType9 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType9 === 'miSeq') {
                if (data.numberOfUnitsRunType10 === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType10 === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    } else if (data.species2 === 'other') {
        if (data.runConfiguration6 === 'standard151X17X8X151') {
            if (data.instrumentRunType12 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType12 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration6 === '10XScRnaStandard') {
            if (data.instrumentRunType13 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType13 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration6 === '10XScAtacStandard') {
            if (data.instrumentRunType14 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType14 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration6 === '10XScMultiomeStandard') {
            if (data.instrumentRunType15 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType15 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration6 === 'nonStandard') {
            if (data.instrumentRunType16 === 'novaSeqX') {
                if (data.numberOfUnitsRunType6 === 'novaSeqX25B300C') {
                    value = '22156';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B300C') {
                    value = '12152';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B200C') {
                    value = '10844';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B100C') {
                    value = '8140';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX15B300C') {
                    value = '3238';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX15B200C') {
                    value = '2902';
                } if (data.numberOfUnitsRunType6 === 'novaSeqX15B100C') {
                    value = '2270';
                }
            } else if (data.instrumentRunType16 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType16 === 'miSeq') {
                if (data.numberOfUnitsRunType11 === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType11 === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    }
} else if (data.species13 === 'pacBio') {
    if (data.species17 === 'human') {
        if (data.instrumentRunType5 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 852;
        }
        if (data.instrumentRunType5 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1220;
        }
    } else if (data.species17 === 'nonHuman') {
        if (data.instrumentRunType6 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 852;
        }
        if (data.instrumentRunType6 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1220;
        }
    }
}


const ignoreIfFound = ['grandTotal9', 'grandTotal7', 'grandTotal6', 'grandTotal5', 'grandTotal4'] // will ignore as the equation is already applied to any of these
if (value && !ignoreIfFound.some(x => data[x])) {
    value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}

