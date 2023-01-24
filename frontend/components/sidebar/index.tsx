'use client'
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react'
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';

function Sidebar({courseTitle, course_id, chapter_id, chapters}: any) {
  return (
    <div>
      <Menu 
        direction='ltr'
      >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          color='white'
        />
        {chapters.map((chapter: any) => {
          return (
            <div key={chapter}>
                <MenuList 
                  zIndex={10} 
                  position='absolute' 
                  bottom='100%'
                >
                  <MenuItem>
                    <Link href={`/course/${course_id}/${chapter.id}`}> 
                     Chapter {chapter.id}: {chapter.title}
                    </Link>
                  </MenuItem>
                </MenuList>
            </div>
          );
        })}
      </Menu>
    </div>
  );
      
  
}

export default Sidebar;
