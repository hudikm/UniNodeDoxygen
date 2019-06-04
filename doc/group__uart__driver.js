var group__uart__driver =
[
    [ "_uart_config", "struct__uart__config.html", [
      [ "baudRate_Bps", "struct__uart__config.html#a7887988d467cbcb940bfb69e30f4b419", null ],
      [ "enableRx", "struct__uart__config.html#aa854be533f7f43433572dbf1e4bebb03", null ],
      [ "enableTx", "struct__uart__config.html#a2f651168ae7be081a29e8f1de5244540", null ],
      [ "idleType", "struct__uart__config.html#a3a5511afafc022db422d5de9c6eeca7f", null ],
      [ "parityMode", "struct__uart__config.html#aedd929d32b06c4bc7418067c832ab28f", null ]
    ] ],
    [ "_uart_transfer", "struct__uart__transfer.html", [
      [ "data", "struct__uart__transfer.html#a539dba6b07c6b81b52f508ebf8a7d6c0", null ],
      [ "dataSize", "struct__uart__transfer.html#a47819d071bfe28c770850b7569fe3483", null ]
    ] ],
    [ "_uart_handle", "struct__uart__handle.html", [
      [ "callback", "struct__uart__handle.html#a6aa04dcc733827d88d7ca589cad87008", null ],
      [ "rxData", "struct__uart__handle.html#aedb4263284f51ebecf7842dbc6a12958", null ],
      [ "rxDataSize", "struct__uart__handle.html#aa9575748a161e9b26616c07357b5ffbf", null ],
      [ "rxDataSizeAll", "struct__uart__handle.html#a6f67f7836c8e0575489ddb579be06ab2", null ],
      [ "rxRingBuffer", "struct__uart__handle.html#a0899932285fcefa9d2cb3a5528c5f1f2", null ],
      [ "rxRingBufferHead", "struct__uart__handle.html#a9d116920fe45bdbb0819841841fa3ea5", null ],
      [ "rxRingBufferSize", "struct__uart__handle.html#ab17ccbc11c8d2de94eb6105db53583c9", null ],
      [ "rxRingBufferTail", "struct__uart__handle.html#adb8a7d117c675e9164a480265aecae45", null ],
      [ "rxState", "struct__uart__handle.html#a627bed2cba21fd6ba785bc49e7d87c3d", null ],
      [ "txData", "struct__uart__handle.html#a521f8779432b6035a91bbcb7d4f5b6b5", null ],
      [ "txDataSize", "struct__uart__handle.html#ae58e8fca80610613930971c944c5a13f", null ],
      [ "txDataSizeAll", "struct__uart__handle.html#ab1681a0ef5772f10119be9f66efb0d77", null ],
      [ "txState", "struct__uart__handle.html#a4dc421b251f4feb8a01258737294c5ab", null ],
      [ "userData", "struct__uart__handle.html#aa5813a8c6733b4ac0b4979c68c45168c", null ]
    ] ],
    [ "FSL_UART_DRIVER_VERSION", "group__uart__driver.html#ga89f9649bfe350eb7b1e53146f35d3de5", null ],
    [ "uart_config_t", "group__uart__driver.html#ga032da70848aac8bc9c3904a32bde5899", null ],
    [ "uart_idle_type_select_t", "group__uart__driver.html#ga9457d04cb0bf9c547babd63a4d20a9fa", null ],
    [ "uart_parity_mode_t", "group__uart__driver.html#ga3d74bf70252b21a0dd19d61587ed320c", null ],
    [ "uart_stop_bit_count_t", "group__uart__driver.html#ga1df1fcb3fcd2d2db0b7ea0189fd94554", null ],
    [ "uart_transfer_callback_t", "group__uart__driver.html#ga2868b6ea396ab212547f2157380429c5", null ],
    [ "uart_transfer_t", "group__uart__driver.html#gae245db88e02822f416e4d246d49076df", null ],
    [ "_uart_flags", "group__uart__driver.html#ga259a53f363288115306a45d08fc66eb8", [
      [ "kUART_TxDataRegEmptyFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a5209c671b2f2f064dc512655387e9e1a", null ],
      [ "kUART_TransmissionCompleteFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a4468b60b2d78c34b93c9199df9e95d3a", null ],
      [ "kUART_RxDataRegFullFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aa86a34b2ea609eeeb63f98fea498e540", null ],
      [ "kUART_IdleLineFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8ab2fc4e1b1164ed3e3fe7e19a39029b2c", null ],
      [ "kUART_RxOverrunFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a93d3c56466b4656dcce08d9323d7afd8", null ],
      [ "kUART_NoiseErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8abd56419f102fb01c7bbc2c38f81ab360", null ],
      [ "kUART_FramingErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8aade5071fa56646adcda3562051443868", null ],
      [ "kUART_ParityErrorFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a0c92973ab1d527115fa01934c62a053d", null ],
      [ "kUART_RxActiveEdgeFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8adcfe89feb164ff5b1720312922006a7a", null ],
      [ "kUART_RxActiveFlag", "group__uart__driver.html#gga259a53f363288115306a45d08fc66eb8a7a4521cd44a3272a94784670d1bf5a0c", null ]
    ] ],
    [ "_uart_idle_type_select", "group__uart__driver.html#gae658ead369268edf18141e1903d426f1", [
      [ "kUART_IdleTypeStartBit", "group__uart__driver.html#ggae658ead369268edf18141e1903d426f1a5216f34232b8d01cdd8db1ca01072901", null ],
      [ "kUART_IdleTypeStopBit", "group__uart__driver.html#ggae658ead369268edf18141e1903d426f1a05771d6cd97e160c6a47d5871d2de013", null ]
    ] ],
    [ "_uart_interrupt_enable", "group__uart__driver.html#ga700f3cd8e3800273a1591307cab6311c", [
      [ "kUART_RxActiveEdgeInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca71755319c216d0bdf79729c18c24cf64", null ],
      [ "kUART_TxDataRegEmptyInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca5a0870233f2ffa8f5ca60d80f1e3ed14", null ],
      [ "kUART_TransmissionCompleteInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311cafd337213dae85b532dfaf9a90e2e5d7b", null ],
      [ "kUART_RxDataRegFullInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311cac8a751a334e172413ab833cb0ccb01c3", null ],
      [ "kUART_IdleLineInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca078ea32d8587f92337a3dee495a1ceed", null ],
      [ "kUART_RxOverrunInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca3e85b14c1b64dbfef1d0b4b7bc39c19d", null ],
      [ "kUART_NoiseErrorInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca53d0fe2bb0cd90198c632f08488af4b3", null ],
      [ "kUART_FramingErrorInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311ca00a387446d0ca7fd843968eca8af22a5", null ],
      [ "kUART_ParityErrorInterruptEnable", "group__uart__driver.html#gga700f3cd8e3800273a1591307cab6311cadc2475fa65313c6f1d13b36f0443b20a", null ]
    ] ],
    [ "_uart_parity_mode", "group__uart__driver.html#gadf9f66755acc340eab030e1a48e35e10", [
      [ "kUART_ParityDisabled", "group__uart__driver.html#ggadf9f66755acc340eab030e1a48e35e10a97e2feae6671a6de1126ebc2edf4606b", null ],
      [ "kUART_ParityEven", "group__uart__driver.html#ggadf9f66755acc340eab030e1a48e35e10a9e68fe3aba46e045bee5433ed098bff0", null ],
      [ "kUART_ParityOdd", "group__uart__driver.html#ggadf9f66755acc340eab030e1a48e35e10ae48c7fabc9babf1be626ebeb2627a54c", null ]
    ] ],
    [ "_uart_status", "group__uart__driver.html#gacef40dc8e8ac174bfe40ebcbc980f84b", [
      [ "kStatus_UART_TxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba19ddee4fe5963467600028b78fb468e7", null ],
      [ "kStatus_UART_RxBusy", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba68cf23f981c4b85f82291163fbb2a5e6", null ],
      [ "kStatus_UART_TxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baf36c829b1b889517bf775c0d7ce29fa6", null ],
      [ "kStatus_UART_RxIdle", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae0877b14627ed2aa8ddb2bf5b033f407", null ],
      [ "kStatus_UART_TxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba765913f003819ed87b861d187bf79ab8", null ],
      [ "kStatus_UART_RxWatermarkTooLarge", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba720cefde05389830f35f6e6df6f6ac67", null ],
      [ "kStatus_UART_FlagCannotClearManually", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba5ee8e23fc9ab20cf366942751b895f54", null ],
      [ "kStatus_UART_Error", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba950972a9e2ebbaa13c92e8f5a51f785d", null ],
      [ "kStatus_UART_RxRingBufferOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba2e5b644b1e10c426af818bc78657e992", null ],
      [ "kStatus_UART_RxHardwareOverrun", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bab6b1fd6c2deec25992449f5b12303a26", null ],
      [ "kStatus_UART_NoiseError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae4ef4df9a5f756ccf1b4bf08292ec2fb", null ],
      [ "kStatus_UART_FramingError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baa7aa134f85df3d5863ca962ce1ea7ee0", null ],
      [ "kStatus_UART_ParityError", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84baea20b2588c38f259f1412aa7132c9ef8", null ],
      [ "kStatus_UART_BaudrateNotSupport", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84bae6cdb41e1b49958f57727cd47afd69b2", null ],
      [ "kStatus_UART_IdleLineDetected", "group__uart__driver.html#ggacef40dc8e8ac174bfe40ebcbc980f84ba3e5b488f7ed418cb08399a5db193103e", null ]
    ] ],
    [ "_uart_stop_bit_count", "group__uart__driver.html#ga3c656a4365cab1185398ff953272091e", [
      [ "kUART_OneStopBit", "group__uart__driver.html#gga3c656a4365cab1185398ff953272091ea5a8829a108d8a46abb097a36cde051a7", null ],
      [ "kUART_TwoStopBit", "group__uart__driver.html#gga3c656a4365cab1185398ff953272091ea9704b3ae3ee851acf324eb357f75ab56", null ]
    ] ],
    [ "UART_ClearStatusFlags", "group__uart__driver.html#gacc4cb85534361f836edca9454a6426c6", null ],
    [ "UART_Deinit", "group__uart__driver.html#ga3ff48bc211831be33e6fe5c50eb671a0", null ],
    [ "UART_DisableInterrupts", "group__uart__driver.html#ga3f24b6b9b730046a9a81918f9abe7d99", null ],
    [ "UART_EnableInterrupts", "group__uart__driver.html#ga49ecd761481a22956e3f46285038719c", null ],
    [ "UART_GetDefaultConfig", "group__uart__driver.html#ga47c7c09e04a0497f4530d553e27d96c5", null ],
    [ "UART_GetEnabledInterrupts", "group__uart__driver.html#ga79bc0b880286ec0dc0543606fc772912", null ],
    [ "UART_GetStatusFlags", "group__uart__driver.html#ga28bf715678c0d3c8c3902e79455ee923", null ],
    [ "UART_Init", "group__uart__driver.html#gab5965a8e11f7e1d4d531141291fd5288", null ],
    [ "UART_ReadBlocking", "group__uart__driver.html#ga39d59e8a94f1af451a0db81888596639", null ],
    [ "UART_SetBaudRate", "group__uart__driver.html#gab3ba5019c11f288cc4f545dd656b6284", null ],
    [ "UART_TransferAbortReceive", "group__uart__driver.html#gacc35671622b2401545cc55cc6ae572d4", null ],
    [ "UART_TransferAbortSend", "group__uart__driver.html#gaa64f9f89d8286fd3ef0736a8c40be2c2", null ],
    [ "UART_TransferCreateHandle", "group__uart__driver.html#ga63db308c32019b7dd6c0647d618e5247", null ],
    [ "UART_TransferGetReceiveCount", "group__uart__driver.html#ga05df10f570cdca4ac2dff63b069d254e", null ],
    [ "UART_TransferGetRxRingBufferLength", "group__uart__driver.html#ga3921aa660977ca77dadf95fa35f1c3a9", null ],
    [ "UART_TransferGetSendCount", "group__uart__driver.html#ga071727ba05b2937ef5ad641ca7faf9c7", null ],
    [ "UART_TransferHandleErrorIRQ", "group__uart__driver.html#gafc364352e879f53138ee1107e3da0a7d", null ],
    [ "UART_TransferHandleIRQ", "group__uart__driver.html#gadb0c4f1e5b59db3aa2261df4f5ddb48d", null ],
    [ "UART_TransferReceiveNonBlocking", "group__uart__driver.html#gaf804acde5d73ce0a5bf54b06195e1218", null ],
    [ "UART_TransferSendNonBlocking", "group__uart__driver.html#gad89afd7db1656c5aef404bb285d0dc05", null ],
    [ "UART_TransferStartRingBuffer", "group__uart__driver.html#ga223fba584bfabd599629d5ce92f929ac", null ],
    [ "UART_TransferStopRingBuffer", "group__uart__driver.html#ga0c0bc73df49cb31dff0e903630314f5b", null ],
    [ "UART_WriteBlocking", "group__uart__driver.html#gad67794d80b7ee2d3292b41af6ff1e100", null ]
];