import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../components/Nav';

function Explore() {
    return (
        <div>
          <Nav  />
          <div style={{marginLeft: 80}}>
            <h2>Explore</h2>
          </div>
        </div>
    );
};

export default Explore;