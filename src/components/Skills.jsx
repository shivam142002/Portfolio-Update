import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import redux from '../assets/logoRedux.png'
import mySQL from '../assets/mySQL.png'
import tailwind from '../assets/tailwind.png';
import JavaLogo from '../assets/JavaLogo.png';
import nodeQ from '../assets/nodeQ.png';
const Skills = () => {

    const skills = [
        {
            id: 1,
            img: html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },

        {
            id: 2,
            img: css,
            title: 'CSS',
            style: 'shadow-blue-500'

        },

        {
            id: 3,
            img: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'

        },

        {
            id: 4,
            img: mySQL,
            title: 'MySQL',
            style: 'shadow-blue-800'

        },


        {
            id: 5,
            img: reactImage,
            title: 'REACT',
            style: 'shadow-blue-600'

        },

        {
            id: 6,
            img: redux,
            title: 'REDUX',
            style: 'shadow-white'

        },

        {
            id: 7,
            img: github,
            title: 'GITHUB',
            style: 'shadow-gray-400'

        },

        {
            id: 8,
            img: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'

        },
        {
            id: 8,
            img: nodeQ,
            title: 'NODEJS',
            //style: 'shadow-sky-400'
             style: 'shadow-green-400'
        },

         
        {
            id: 7,
            img: JavaLogo,
            title: 'JAVA',
            style: 'shadow-blue-600'

        },

    ]

    return (
        <>
            <div name="Skills" className=" bg-gradient-to-b from-gray-800 to-black w-full">
                <div className=" flex flex-col justify-center w-full h-full text-white max-w-screen-lg mx-auto p-4 ">
                    <div className="">
                        <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline ' >Skills</p>
                        <p className=' py-6 ' >Technologies i've worked with</p>
                    </div>


                    <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">

                        {/* Cards */}
                        {skills?.map(({ id, img, title, style }) =>
                            <div key={id} className={` shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                                <img src={img} alt="tech_image" className=' md:w-20 w-12 mx-auto ' />
                                <p className=' mt-4 '>{title}</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;