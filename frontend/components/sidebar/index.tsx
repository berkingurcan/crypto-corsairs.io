'use client'
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'
import {
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';



function Sidebar({courseTitle, course_id, chapter_id, chapters}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          color='white'
          onClick={onOpen}
          className={styles.MenuButton}
        />
      </Menu>
      <Drawer 
        placement='bottom' 
        onClose={onClose} 
        isOpen={isOpen} 
        colorScheme="blackAlpha"
        closeOnEsc={true}
        closeOnOverlayClick={true}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton color='white'/>
          <DrawerHeader borderBottomWidth='1px'><h4>{courseTitle}</h4></DrawerHeader>
          <DrawerBody>
            {chapters.map((chapter: any) => {
              return (
                <>
                  <div key={chapter}>
                    <Link href={`/course/${course_id}/${chapter.id}`}>
                      Chapter {chapter.id}: {chapter.title}
                    </Link>
                  </div>
                </>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
