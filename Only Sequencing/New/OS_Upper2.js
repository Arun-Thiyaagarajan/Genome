if (data.novaSeqX || data.novaSeq6000 || data.nextSeq2000) {
    if (data.species2 === 'human') {
        if (data.species13 === 'illumina') {
            if (data.runConfiguration4 === 'standard151X17X8X151') {
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
            if (data.runConfiguration4 === 'standard151X17X8X151') {
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
            }else if(data.runConfiguration4 === '10XScAtacStandard'){
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
            if (data.runConfiguration4 === 'standard151X17X8X151') {
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
                if (data.instrumentRunType10 === 'novaSeqX') {
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
                }else if(data.instrumentRunType10 === 'nextSeq2000'){
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
    }
}
if (data.species13 === 'illumina') {
    if (data.species2 === 'human') {
        if (data.runConfiguration4 === 'standard151X17X8X151') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration4 === '10XScRnaStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScAtacStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
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
            if (data.instrumentRunType10 === 'novaSeqX') {
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
            } else if (data.instrumentRunType10 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType === 'nextSeq2000P4300C') {
                    value = '5486';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4200C') {
                    value = '4300';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4100C') {
                    value = '3056';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P450C') {
                    value = '2088';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType10 === 'miSeq') {
                if (data.numberOfUnitsRunType === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    } else if (data.species2 === 'mouse') {
        if (data.runConfiguration4 === 'standard151X17X8X151') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration4 === '10XScRnaStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScAtacStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScMultiomeStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === 'nonStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
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
            } else if (data.instrumentRunType10 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType === 'nextSeq2000P4300C') {
                    value = '5486';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4200C') {
                    value = '4300';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4100C') {
                    value = '3056';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P450C') {
                    value = '2088';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType10 === 'miSeq') {
                if (data.numberOfUnitsRunType === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    } else if (data.species2 === 'other') {
        if (data.runConfiguration4 === 'standard151X17X8X151') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.50;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 49.95;
            }
        }
        if (data.runConfiguration4 === '10XScRnaStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.32;
            }
        }
        if (data.runConfiguration4 === '10XScAtacStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.52;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
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
            if (data.instrumentRunType10 === 'novaSeqX') {
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
            } else if (data.instrumentRunType10 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType === 'nextSeq2000P4300C') {
                    value = '5486';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4200C') {
                    value = '4300';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P4100C') {
                    value = '3056';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P450C') {
                    value = '2088';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3300C') {
                    value = '6664';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3200C') {
                    value = '5030';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P3100C') {
                    value = '3652';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P350C') {
                    value = '2578';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2600C') {
                    value = '4318';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2300C') {
                    value = '3948';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2200C') {
                    value = '3024';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P2100C') {
                    value = '1712';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1600C') {
                    value = '2172';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1300C') {
                    value = '1498';
                }
                if (data.numberOfUnitsRunType === 'nextSeq2000P1100C') {
                    value = '1132';
                }
            } else if (data.instrumentRunType10 === 'miSeq') {
                if (data.numberOfUnitsRunType === 'miSeqV3600C') {
                    value = '2106';
                } if (data.numberOfUnitsRunType === 'miSeqV3150C') {
                    value = '1286';
                }
                if (data.numberOfUnitsRunType === 'miSeqMicroV2300C') {
                    value = '678';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2500C') {
                    value = '560';
                }
                if (data.numberOfUnitsRunType === 'miSeqNanoV2300C') {
                    value = '484';
                }
            }
        }
    }
} else if (data.species13 === 'pacBio') {
    if (data.species2 === 'human') {
        if (data.instrumentRunType10 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 852;
        }
        if (data.instrumentRunType10 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1220;
        }
    } else if (data.species2 === 'nonHuman') {
        if (data.instrumentRunType10 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 852;
        }
        if (data.instrumentRunType10 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1220;
        }
    }
}


const ignoreIfFound = ['grandTotal9', 'grandTotal7', 'grandTotal6', 'grandTotal5', 'grandTotal4'] // will ignore as the equation is already applied to any of these
if (value && !ignoreIfFound.some(x => data[x])) {
    value = (value - (Number(data.enterTheCreditAmount) || 0)) + (Number(data.additionalCost) || 0)
}
