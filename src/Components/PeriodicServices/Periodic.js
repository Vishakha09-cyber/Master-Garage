import BasicService from '../../Images/BasicService.png';
import StandardService from '../../Images/StandardService.png';
import EngineScanning from '../../Images/EngineScanning.png';
import ComprehensiveService from '../../Images/ComprehensiveService.png';
import CompleteService from '../../Images/CompleteService.png';
import CarInspection from '../../Images/CarInspection.png';
import StarterMotor from '../../Images/StarterMotor.png';
import CarFluid from '../../Images/CarFluid.png';
import systemUpdate from '../../Images/systemUpdate.png';
import check from '../../Images/check.png';
import PS1 from '../../Images/ImagesAll/drawable-xxxhdpi/PS1.png';
import ShowMore from './ServicesShowmore';

export const Periodic=[
    {
        id:1,
        title:'Basic Service', 
        img:BasicService,
        yearmonth:'Every 5000 Kms or 3 month',
        points:'9 Point Service',
        check:check,
        amount:1232
    },
    {
        id:2,
        title:'Standard Service',
        img:StandardService,
        yearmonth:'Every 10000 Kms or 6 month',
        points:'15 Point Service',
        check:check,
        amount:1232
    },
    {
        id:3,
        title:'Comprehensive Service',
        img:ComprehensiveService,
        yearmonth:'Every 10000 Kms or 6 month',
        points:'20 Point Service',
        check:check,
        amount:1232
    },

    
];
export const specialservice=[
    {
        id:4,
        title:'Engine Scanning',
        img:EngineScanning,
        yearmonth2:'Every 10000 Kms or 6 month',
        pointservice:'Scanner Report Provided',
        check:check,
        amount:1232
    },
    {
        id:5,
        title:'Complete Suspension Inspection',
        img:CompleteService,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'Scanner Report Provided',
        check:check,
        amount:1232
    },
    {
        id:6,
        title:'Car Inspection & Diagnostics',
        img:CarInspection,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'Scanner Report Provided',
        check:check,
        amount:1232
    },
    {
        id:7,
        title:'Car Fluid Check',
        img:CarFluid,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'5 Point Checklist',
        check:check,
        amount:1232
    },
    {
        id:8,
        title:'Starter Motor Repair',
        img:StarterMotor,
        yearmonth2:'Every 5000 Kms or 3 month',
        pointservice:'5 Point Service',
        check:check,
        amount:1232
    }
]