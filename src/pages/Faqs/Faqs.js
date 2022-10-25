import React from 'react';

const Faqs = () => {
    return (
        <div>
            <div className='w-3/4 py-10 mx-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-white'>Frequently Asked Questions</h2>

                    <div className='mt-10'>
                        <div className="collapse">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                What is BrainExercise?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    BrainExercise is an online learning platform where you can learn and practice programming skills.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                What is the difference between BrainExercise and other online learning platforms?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    BrainExercise is a platform where you can learn and practice programming skills. We have a large collection of courses and practice problems, and a number of courses are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I learn programming from BrainExercise?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can learn programming from BrainExercise by following our courses. We have a large collection of courses and practice problems, and a number of courses are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>


                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I practice programming from BrainExercise?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can practice programming from BrainExercise by following our practice problems. We have a large collection of practice problems, and a number of practice problems are being added every day. Our Instructors are friendly enough to help you out.
                                </p>
                            </div>
                        </div>

                        <div className="collapse mt-4">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                How can I contact BrainExercise?
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                <p>
                                    You can contact BrainExercise by sending an email to <a href="mailto:admin@brainexercise.com">Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;