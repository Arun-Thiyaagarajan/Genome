
if (data.species13 === 'illumina') {
    if (data.species2 === 'human') {
        if (data.runConfiguration4 === 'standard151X17X8X151') {
            if (data.instrumentRunType === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.90;
            }
            if (data.instrumentRunType === 'novaSeq6000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
            }
            if (data.instrumentRunType === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 32.65;
            }
        }
        if (data.runConfiguration4 === '10XScRnaStandard') {
            if (data.instrumentRunType1 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType1 === 'novaSeq6000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType1 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration4 === '10XScAtacStandard') {
            if (data.instrumentRunType3 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType3 === 'novaSeq6000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType3 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration4 === '10XScMultiomeStandard') {
            if (data.instrumentRunType10 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType10 === 'novaSeq6000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType10 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration4 === 'nonStandard') {
            if (data.instrumentRunType4 === 'novaSeqX') {
                if (data.numberOfUnitsRunType === 'novaSeqX25B300C') {
                    value = '24051';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B300C') {
                    value = '12840';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B200C') {
                    value = '11285';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX10B100C') {
                    value = '8580';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX15B300C') {
                    value = '3455';
                }
                if (data.numberOfUnitsRunType === 'novaSeqX15B200C') {
                    value = '3090';
                } if (data.numberOfUnitsRunType === 'novaSeqX15B100C') {
                    value = '2435';
                }
            } else if (data.instrumentRunType4 === 'novaSeq6000') {
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S4300C') {
                    value = '19490';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S4200C') {
                    value = '17000';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S435C') {
                    value = '12035';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S2300C') {
                    value = '12410';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S2200C') {
                    value = '11385';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S2100C') {
                    value = '9090';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S1300C') {
                    value = '6945';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000S1200C') {
                    value = '6360';
                } if (data.numberOfUnitsRunType2 === 'novaSeq6000S1100C') {
                    value = '5110';
                } if (data.numberOfUnitsRunType2 === 'novaSeq6000Sp500C') {
                    value = '5700';
                } if (data.numberOfUnitsRunType2 === 'novaSeq6000Sp300C') {
                    value = '4240';
                } if (data.numberOfUnitsRunType2 === 'novaSeq6000Sp200C') {
                    value = '3895';
                }
                if (data.numberOfUnitsRunType2 === 'novaSeq6000Sp100C') {
                    value = '3100';
                }
            } else if (data.instrumentRunType4 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3300C') {
                    value = '6570';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3200C') {
                    value = '4980';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P3100C') {
                    value = '3635';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P350C') {
                    value = '2590';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2600C') {
                    value = '4285';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2300C') {
                    value = '3920';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2200C') {
                    value = '3025';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P2100C') {
                    value = '1755';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1600C') {
                    value = '2205';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1300C') {
                    value = '1550';
                }
                if (data.numberOfUnitsRunType1 === 'nextSeq2000P1100C') {
                    value = '1195';
                }
            } else if (data.instrumentRunType4 === 'miSeq') {
                if (data.numberOfUnitsRunType3 === 'miSeqV3600C') {
                    value = '1835';
                } if (data.numberOfUnitsRunType3 === 'miSeqV3150C') {
                    value = '1170';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqMicroV2300C') {
                    value = '680';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqNanoV2500C') {
                    value = '585';
                }
                if (data.numberOfUnitsRunType3 === 'miSeqNanoV2300C') {
                    value = '520';
                }
            }
        }
    } else if (data.species2 === 'mouse') {
        if (data.runConfiguration5 === 'standard151X17X8X151') {
            if (data.instrumentRunType7 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.90;
            }
            if (data.instrumentRunType7 === 'novaSeq6000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
            }
            if (data.instrumentRunType7 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 32.65;
            }
        }
        if (data.runConfiguration5 === '10XScRnaStandard') {
            if (data.instrumentRunType2 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType2 === 'novaSeq6000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType2 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration5 === '10XScAtacStandard') {
            if (data.instrumentRunType8 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType8 === 'novaSeq6000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType8 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration5 === '10XScMultiomeStandard') {
            if (data.instrumentRunType11 === 'novaSeqX') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType11 === 'novaSeq6000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType11 === 'nextSeq2000') {
                value = 0.0175 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration5 === 'nonStandard') {
            if (data.instrumentRunType9 === 'novaSeqX') {
                if (data.numberOfUnitsRunType5 === 'novaSeqX25B300C') {
                    value = '24051';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B300C') {
                    value = '12840';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B200C') {
                    value = '11285';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX10B100C') {
                    value = '8580';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX15B300C') {
                    value = '3455';
                }
                if (data.numberOfUnitsRunType5 === 'novaSeqX15B200C') {
                    value = '3090';
                } if (data.numberOfUnitsRunType5 === 'novaSeqX15B100C') {
                    value = '2435';
                }
            } else if (data.instrumentRunType9 === 'novaSeq6000') {
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S4300C') {
                    value = '19490';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S4200C') {
                    value = '17000';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S435C') {
                    value = '12035';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S2300C') {
                    value = '12410';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S2200C') {
                    value = '11385';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S2100C') {
                    value = '9090';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S1300C') {
                    value = '6945';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000S1200C') {
                    value = '6360';
                } if (data.numberOfUnitsRunType4 === 'novaSeq6000S1100C') {
                    value = '5110';
                } if (data.numberOfUnitsRunType4 === 'novaSeq6000Sp500C') {
                    value = '5700';
                } if (data.numberOfUnitsRunType4 === 'novaSeq6000Sp300C') {
                    value = '4240';
                } if (data.numberOfUnitsRunType4 === 'novaSeq6000Sp200C') {
                    value = '3895';
                }
                if (data.numberOfUnitsRunType4 === 'novaSeq6000Sp100C') {
                    value = '3100';
                }
            } else if (data.instrumentRunType9 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3300C') {
                    value = '6570';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3200C') {
                    value = '4980';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P3100C') {
                    value = '3635';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P350C') {
                    value = '2590';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2600C') {
                    value = '4285';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2300C') {
                    value = '3920';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2200C') {
                    value = '3025';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P2100C') {
                    value = '1755';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1600C') {
                    value = '2205';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1300C') {
                    value = '1550';
                }
                if (data.numberOfUnitsRunType8 === 'nextSeq2000P1100C') {
                    value = '1195';
                }
            } else if (data.instrumentRunType9 === 'miSeq') {
                if (data.numberOfUnitsRunType10 === 'miSeqV3600C') {
                    value = '1835';
                } if (data.numberOfUnitsRunType10 === 'miSeqV3150C') {
                    value = '1170';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqMicroV2300C') {
                    value = '680';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqNanoV2500C') {
                    value = '585';
                }
                if (data.numberOfUnitsRunType10 === 'miSeqNanoV2300C') {
                    value = '520';
                }
            }
        }
    } else if (data.species2 === 'other') {
        if (data.runConfiguration6 === 'standard151X17X8X151') {
            if (data.instrumentRunType12 === 'novaSeqX') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 6.90;
            }
            if (data.instrumentRunType12 === 'novaSeq6000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 15.45;
            }
            if (data.instrumentRunType12 === 'nextSeq2000') {
                value = data.numberOfSamples2 * data.numberOfSamples7 * 32.65;
            }
        }
        if (data.runConfiguration6 === '10XScRnaStandard') {
            if (data.instrumentRunType13 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType13 === 'novaSeq6000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType13 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration6 === '10XScAtacStandard') {
            if (data.instrumentRunType14 === 'novaSeqX') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType14 === 'novaSeq6000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType14 === 'nextSeq2000') {
                value = 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration6 === '10XScMultiomeStandard') {
            if (data.instrumentRunType15 === 'novaSeqX') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 1.62;
            }
            if (data.instrumentRunType15 === 'novaSeq6000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 4.28;
            }
            if (data.instrumentRunType15 === 'nextSeq2000') {
                value = 0.035 * data.numberOfSamples2 * data.numberOfSamples7 + 0.016 * data.numberOfSamples2 * data.numberOfSamples7 * 11.96;
            }
        }
        if (data.runConfiguration6 === 'nonStandard') {
            if (data.instrumentRunType16 === 'novaSeqX') {
                if (data.numberOfUnitsRunType6 === 'novaSeqX25B300C') {
                    value = '24051';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B300C') {
                    value = '12840';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B200C') {
                    value = '11285';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX10B100C') {
                    value = '8580';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX15B300C') {
                    value = '3455';
                }
                if (data.numberOfUnitsRunType6 === 'novaSeqX15B200C') {
                    value = '3090';
                } if (data.numberOfUnitsRunType6 === 'novaSeqX15B100C') {
                    value = '2435';
                }
            } else if (data.instrumentRunType16 === 'novaSeq6000') {
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S4300C') {
                    value = '19490';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S4200C') {
                    value = '17000';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S435C') {
                    value = '12035';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S2300C') {
                    value = '12410';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S2200C') {
                    value = '11385';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S2100C') {
                    value = '9090';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S1300C') {
                    value = '6945';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000S1200C') {
                    value = '6360';
                } if (data.numberOfUnitsRunType7 === 'novaSeq6000S1100C') {
                    value = '5110';
                } if (data.numberOfUnitsRunType7 === 'novaSeq6000Sp500C') {
                    value = '5700';
                } if (data.numberOfUnitsRunType7 === 'novaSeq6000Sp300C') {
                    value = '4240';
                } if (data.numberOfUnitsRunType7 === 'novaSeq6000Sp200C') {
                    value = '3895';
                }
                if (data.numberOfUnitsRunType7 === 'novaSeq6000Sp100C') {
                    value = '3100';
                }
            } else if (data.instrumentRunType16 === 'nextSeq2000') {
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3300C') {
                    value = '6570';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3200C') {
                    value = '4980';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P3100C') {
                    value = '3635';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P350C') {
                    value = '2590';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2600C') {
                    value = '4285';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2300C') {
                    value = '3920';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2200C') {
                    value = '3025';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P2100C') {
                    value = '1755';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1600C') {
                    value = '2205';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1300C') {
                    value = '1550';
                }
                if (data.numberOfUnitsRunType9 === 'nextSeq2000P1100C') {
                    value = '1195';
                }
            } else if (data.instrumentRunType16 === 'miSeq') {
                if (data.numberOfUnitsRunType11 === 'miSeqV3600C') {
                    value = '1835';
                } if (data.numberOfUnitsRunType11 === 'miSeqV3150C') {
                    value = '1170';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqMicroV2300C') {
                    value = '680';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqNanoV2500C') {
                    value = '585';
                }
                if (data.numberOfUnitsRunType11 === 'miSeqNanoV2300C') {
                    value = '520';
                }
            }
        }
    }
} else if (data.species13 === 'pacBio') {
    if (data.species17 === 'human') {
        if (data.instrumentRunType5 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1325;
        }
        if (data.instrumentRunType5 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 955;
        }
    } else if (data.species17 === 'nonHuman') {
        if (data.instrumentRunType6 === 'revio') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 1325;
        }
        if (data.instrumentRunType6 === 'sequelIIe') {
            value = data.numberOfSamples2 * data.numberOfSamples7 * 955;
        }
    }
}
