from Cube_Turning.Cube_Turning_CCW import CubeArrayBCCW, CubeArrayDCCW, CubeArrayFCCW, CubeArrayLCCW, CubeArrayRCCW, CubeArrayUCCW
from Cube_Turning.Cube_Turning_CW import CubeArrayBCW, CubeArrayDCW, CubeArrayFCW, CubeArrayLCW, CubeArrayRCW, CubeArrayUCW

edge_map = {
    ('AE', 'EE'): CubeArrayLCW,
    ('AE', 'SE'): CubeArrayLCCW,
    ('BE', 'AE'): CubeArrayUCCW,
    ('BE', 'CE'): CubeArrayUCW,
    ('BE', 'UE'): CubeArrayBCW,  # was LCW -> BCW
    ('BE', 'OE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('CE', 'BE'): CubeArrayUCCW,
    ('CE', 'DE'): CubeArrayUCW,
    ('CE', 'GE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('CE', 'QE'): CubeArrayRCW,  # was BCW -> RCW
    ('DE', 'AE'): CubeArrayUCW,
    ('DE', 'CE'): CubeArrayUCCW,
    ('DE', 'WE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('DE', 'ME'): CubeArrayFCW,  # was RCW -> FCW
    ('EE', 'FE'): CubeArrayFCW,  # was RCW -> FCW
    ('EE', 'HE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('EE', 'AE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('EE', 'IE'): CubeArrayLCW,  # was FCW -> LCW
    ('FE', 'EE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('FE', 'GE'): CubeArrayFCW,  # was RCW -> FCW
    ('FE', 'NE'): CubeArrayUCCW,
    ('FE', 'VE'): CubeArrayUCW,
    ('GE', 'FE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('GE', 'HE'): CubeArrayFCW,  # was RCW -> FCW
    ('GE', 'CE'): CubeArrayRCW,  # was BCW -> RCW
    ('GE', 'KE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('HE', 'EE'): CubeArrayFCW,  # was RCW -> FCW
    ('HE', 'GE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('HE', 'PE'): CubeArrayDCW,
    ('HE', 'XE'): CubeArrayDCCW,
    ('IE', 'JE'): CubeArrayDCW,
    ('IE', 'LE'): CubeArrayDCCW,
    ('IE', 'EE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('IE', 'SE'): CubeArrayLCW,  # was FCW -> LCW
    ('JE', 'IE'): CubeArrayDCCW,
    ('JE', 'KE'): CubeArrayDCW,
    ('JE', 'WE'): CubeArrayFCW,  # was RCW -> FCW
    ('JE', 'ME'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('KE', 'JE'): CubeArrayDCCW,
    ('KE', 'LE'): CubeArrayDCW,
    ('KE', 'GE'): CubeArrayRCW,  # was BCW -> RCW
    ('KE', 'QE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('LE', 'IE'): CubeArrayDCW,
    ('LE', 'KE'): CubeArrayDCCW,
    ('LE', 'OE'): CubeArrayBCW,  # was LCW -> BCW
    ('LE', 'UE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('ME', 'NE'): CubeArrayRCW,  # was BCW -> RCW
    ('ME', 'PE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('ME', 'DE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('ME', 'JE'): CubeArrayFCW,  # was RCW -> FCW
    ('NE', 'ME'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('NE', 'OE'): CubeArrayRCW,  # was BCW -> RCW
    ('NE', 'FE'): CubeArrayUCW,
    ('NE', 'RE'): CubeArrayUCCW,
    ('OE', 'NE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('OE', 'PE'): CubeArrayRCW,  # was BCW -> RCW
    ('OE', 'BE'): CubeArrayBCW,  # was LCW -> BCW
    ('OE', 'LE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('PE', 'OE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('PE', 'ME'): CubeArrayRCW,  # was BCW -> RCW
    ('PE', 'HE'): CubeArrayDCCW,
    ('PE', 'TE'): CubeArrayDCW,
    ('QE', 'RE'): CubeArrayBCW,  # was LCW -> BCW
    ('QE', 'TE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('QE', 'CE'): CubeArrayRCW,  # was BCW -> RCW
    ('QE', 'KE'): CubeArrayRCCW,  # was BCCW -> RCCW
    ('RE', 'QE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('RE', 'SE'): CubeArrayBCW,  # was LCW -> BCW
    ('RE', 'NE'): CubeArrayUCW,
    ('RE', 'VE'): CubeArrayUCCW,
    ('SE', 'RE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('SE', 'TE'): CubeArrayBCW,  # was LCW -> BCW
    ('SE', 'AE'): CubeArrayLCW,  # was FCW -> LCW
    ('SE', 'IE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('TE', 'QE'): CubeArrayBCW,  # was LCW -> BCW
    ('TE', 'SE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('TE', 'PE'): CubeArrayDCCW,
    ('TE', 'XE'): CubeArrayDCW,
    ('UE', 'VE'): CubeArrayLCW,  # was FCW -> LCW
    ('UE', 'XE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('UE', 'BE'): CubeArrayBCCW,  # was LCCW -> BCCW
    ('UE', 'LE'): CubeArrayBCW,  # was LCW -> BCW
    ('VE', 'UE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('VE', 'WE'): CubeArrayLCW,  # was FCW -> LCW
    ('VE', 'FE'): CubeArrayUCCW,
    ('VE', 'RE'): CubeArrayUCW,
    ('WE', 'VE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('WE', 'XE'): CubeArrayLCW,  # was FCW -> LCW
    ('WE', 'DE'): CubeArrayFCW,  # was RCW -> FCW
    ('WE', 'JE'): CubeArrayFCCW,  # was RCCW -> FCCW
    ('XE', 'UE'): CubeArrayLCW,  # was FCW -> LCW
    ('XE', 'WE'): CubeArrayLCCW,  # was FCCW -> LCCW
    ('XE', 'HE'): CubeArrayDCW,
    ('XE', 'TE'): CubeArrayDCCW,
}

# edge_map = {
#     ('BE', 'AE'): 'move1',
#     ('BE', 'CE'): 'move2',
#     ('BE', 'UE'): 'move3',
#     ('BE', 'OE'): 'move4',
#     ('CE', 'BE'): 'move5',
#     ('CE', 'DE'): 'move6',
#     ('CE', 'GE'): 'move7',
#     ('CE', 'QE'): 'move8',
#     ('DE', 'AE'): 'move9',
#     ('DE', 'CE'): 'move10',
#     ('DE', 'WE'): 'move11',
#     ('DE', 'ME'): 'move12',
#     ('EE', 'FE'): 'move13',
#     ('EE', 'HE'): 'move14',
#     ('EE', 'AE'): 'move15',
#     ('EE', 'IE'): 'move16',
#     ('FE', 'EE'): 'move17',
#     ('FE', 'GE'): 'move18',
#     ('FE', 'NE'): 'move19',
#     ('FE', 'VE'): 'move20',
#     ('GE', 'FE'): 'move21',
#     ('GE', 'HE'): 'move22',
#     ('GE', 'CE'): 'move23',
#     ('GE', 'KE'): 'move24',
#     ('HE', 'EE'): 'move25',
#     ('HE', 'GE'): 'move26',
#     ('HE', 'PE'): 'move27',
#     ('HE', 'XE'): 'move28',
#     ('IE', 'JE'): 'move29',
#     ('IE', 'LE'): 'move30',
#     ('IE', 'EE'): 'move31',
#     ('IE', 'SE'): 'move32',
#     ('JE', 'IE'): 'move33',
#     ('JE', 'KE'): 'move34',
#     ('JE', 'WE'): 'move35',
#     ('JE', 'ME'): 'move36',
#     ('KE', 'JE'): 'move37',
#     ('KE', 'LE'): 'move38',
#     ('KE', 'GE'): 'move39',
#     ('KE', 'QE'): 'move40',
#     ('LE', 'IE'): 'move41',
#     ('LE', 'KE'): 'move42',
#     ('LE', 'OE'): 'move43',
#     ('LE', 'UE'): 'move44',
#     ('ME', 'NE'): 'move45',
#     ('ME', 'PE'): 'move46',
#     ('ME', 'DE'): 'move47',
#     ('ME', 'JE'): 'move48',
#     ('NE', 'ME'): 'move49',
#     ('NE', 'OE'): 'move50',
#     ('NE', 'FE'): 'move51',
#     ('NE', 'RE'): 'move52',
#     ('OE', 'NE'): 'move53',
#     ('OE', 'PE'): 'move54',
#     ('OE', 'BE'): 'move55',
#     ('OE', 'LE'): 'move56',
#     ('PE', 'OE'): 'move57',
#     ('PE', 'ME'): 'move58',
#     ('PE', 'HE'): 'move59',
#     ('PE', 'TE'): 'move60',
#     ('QE', 'RE'): 'move61',
#     ('QE', 'TE'): 'move62',
#     ('QE', 'CE'): 'move63',
#     ('QE', 'KE'): 'move64',
#     ('RE', 'QE'): 'move65',
#     ('RE', 'SE'): 'move66',
#     ('RE', 'NE'): 'move67',
#     ('RE', 'VE'): 'move68',
#     ('SE', 'RE'): 'move69',
#     ('SE', 'TE'): 'move70',
#     ('SE', 'AE'): 'move71',
#     ('SE', 'IE'): 'move72',
#     ('TE', 'QE'): 'move73',
#     ('TE', 'SE'): 'move74',
#     ('TE', 'PE'): 'move75',
#     ('TE', 'XE'): 'move76',
#     ('UE', 'VE'): 'move77',
#     ('UE', 'XE'): 'move78',
#     ('UE', 'BE'): 'move79',
#     ('UE', 'LE'): 'move80',
#     ('VE', 'UE'): 'move81',
#     ('VE', 'WE'): 'move82',
#     ('VE', 'FE'): 'move83',
#     ('VE', 'RE'): 'move84',
#     ('WE', 'VE'): 'move85',
#     ('WE', 'XE'): 'move86',
#     ('WE', 'DE'): 'move87',
#     ('WE', 'JE'): 'move88',
#     ('XE', 'UE'): 'move89',
#     ('XE', 'WE'): 'move90',
#     ('XE', 'HE'): 'move91',
#     ('XE', 'TE'): 'move92',
# }
