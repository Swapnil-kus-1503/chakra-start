import React from "react";
import styles from "./SideDrawer.modules.css"

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

export function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('left')

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          {/* <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio> */}
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><h1>Logo</h1></DrawerHeader>
          <DrawerBody className={styles.options}>
              <div>Home</div><br/>
              <div>Trending</div><br/>
              <div>Explore</div><br/>
              <div>Favorites</div><br/>
              <div>Settings</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}