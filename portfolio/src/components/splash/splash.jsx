import React, { useState } from 'react';
import Typed from './typed';

const Splash = () => {
    const [animationIdx, setIdx] = useState(0);
    const incrementIdx = () => setIdx((curIdx) => curIdx + 1);

    return (
        <section id="splash">
            <div className="splash-main-text">
                <div className="slim-shady">
                    <span className="splash-main-line splash-line">
                        <Typed
                            text="Hi, "
                            typingSpeed={20}
                            startTyping={animationIdx === 0}
                            showCursor={animationIdx === 0}
                            typingDelay={2000}
                            onComplete={incrementIdx}
                        />
                    </span>
                    <span className="splash-main-line splash-line">
                        <Typed
                            text="my name is"
                            typingSpeed={20}
                            startTyping={animationIdx === 1}
                            showCursor={animationIdx === 1}
                            typingDelay={500}
                            onComplete={incrementIdx}
                        />
                    </span>
                </div>
                <div className="name">
                    <Typed
                        text="Harsh Kumar"
                        typingSpeed={20}
                        startTyping={animationIdx === 2}
                        showCursor={animationIdx === 2}
                        typingDelay={100}
                        onComplete={incrementIdx}
                    />
                </div>
                <span className={`code-line ${animationIdx >= 3 ? 'active' : ''}`}>
                    <Typed
                        text="I am a software engineer based in the San Francisco Bay Area, specializing in Front End Development, website accessibility, and user centric design."
                        typingSpeed={20}
                        startTyping={animationIdx === 3}
                        showCursor={animationIdx === 3}
                        typingDelay={500}
                        // onComplete={incrementIdx}
                    />
                </span>
            </div>
            {/* <button onClick={() => turnOn()}>Start</button> */}
        </section>
    )
}

export default Splash;