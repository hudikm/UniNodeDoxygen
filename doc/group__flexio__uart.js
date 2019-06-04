var group__flexio__uart =
[
    [ "_flexio_uart_type", "struct__flexio__uart__type.html", [
      [ "flexioBase", "struct__flexio__uart__type.html#ae80333106e2b3ed8723a1ba780e3db0e", null ],
      [ "RxPinIndex", "struct__flexio__uart__type.html#a85438b6f4b7d88017d4c05dba6f3d83e", null ],
      [ "shifterIndex", "struct__flexio__uart__type.html#a6881347e0fb8615205715d39066d4965", null ],
      [ "timerIndex", "struct__flexio__uart__type.html#af763098e90a19b0fb54079bffc418c22", null ],
      [ "TxPinIndex", "struct__flexio__uart__type.html#aa876273f088e8eebc92c3ae4be4614a1", null ]
    ] ],
    [ "_flexio_uart_config", "struct__flexio__uart__config.html", [
      [ "baudRate_Bps", "struct__flexio__uart__config.html#a64b1a3cad4cefb854fb89bb0159fe47a", null ],
      [ "bitCountPerChar", "struct__flexio__uart__config.html#a6595a9f387022b3561c7fe1314e59150", null ],
      [ "enableFastAccess", "struct__flexio__uart__config.html#a03e80a4e0bb6d8b967424d3db194cb8c", null ],
      [ "enableInDebug", "struct__flexio__uart__config.html#aa5fccdf7ef415464341bd923023ce85d", null ],
      [ "enableInDoze", "struct__flexio__uart__config.html#ada3d4a23a3c835d20a2477886dd9a282", null ],
      [ "enableUart", "struct__flexio__uart__config.html#aed8115cbc75de0df22c5dba0f0875291", null ]
    ] ],
    [ "_flexio_uart_transfer", "struct__flexio__uart__transfer.html", [
      [ "data", "struct__flexio__uart__transfer.html#a9e9b2de91956c9b4b118fb7b43a99a27", null ],
      [ "dataSize", "struct__flexio__uart__transfer.html#aa4c221e57175b9ef6882283f202acb41", null ]
    ] ],
    [ "_flexio_uart_handle", "struct__flexio__uart__handle.html", [
      [ "callback", "struct__flexio__uart__handle.html#a9ac9a9cd0024d6103a468685c804f736", null ],
      [ "rxData", "struct__flexio__uart__handle.html#ab0c9d76cedee59dc8f0c352eee94ae5c", null ],
      [ "rxDataSize", "struct__flexio__uart__handle.html#ae9f3dde77d2fc9047a58095f19a80cb9", null ],
      [ "rxDataSizeAll", "struct__flexio__uart__handle.html#a3d7c107772ba9dc3e700e11bfe67a12f", null ],
      [ "rxRingBuffer", "struct__flexio__uart__handle.html#ac2b712572f62e436b5651c7c8056e6ad", null ],
      [ "rxRingBufferHead", "struct__flexio__uart__handle.html#a22f29f51f9083c4514c26016a320d3ad", null ],
      [ "rxRingBufferSize", "struct__flexio__uart__handle.html#a7c2ced8bc92f2445f6c5880132738a58", null ],
      [ "rxRingBufferTail", "struct__flexio__uart__handle.html#a61c1052b93e2613f5276091e98fb42b8", null ],
      [ "rxState", "struct__flexio__uart__handle.html#a3bb96c5ee20f71404b4c01928943717a", null ],
      [ "txData", "struct__flexio__uart__handle.html#acd45a2a265e88365f9eef7d64d8615e1", null ],
      [ "txDataSize", "struct__flexio__uart__handle.html#a99ff65a22c359bc978b7b6315595124b", null ],
      [ "txDataSizeAll", "struct__flexio__uart__handle.html#a8cb9d22dc7633c16b0f54c5315a6611a", null ],
      [ "txState", "struct__flexio__uart__handle.html#aff1d8c22c51647163392bc6b12ef717c", null ],
      [ "userData", "struct__flexio__uart__handle.html#a228e878644ad785e5bf56055bd052bb0", null ]
    ] ],
    [ "FSL_FLEXIO_UART_DRIVER_VERSION", "group__flexio__uart.html#gaa668f10e7e0820c4d504f124ef506b59", null ],
    [ "flexio_uart_bit_count_per_char_t", "group__flexio__uart.html#ga570c5a5d74da006d4a6da255ed4eed13", null ],
    [ "flexio_uart_config_t", "group__flexio__uart.html#ga2a19c298dba82980c3f1c8063f02a3d1", null ],
    [ "flexio_uart_transfer_callback_t", "group__flexio__uart.html#ga2f5b9efcb7d547a39078333eec2b4ed6", null ],
    [ "flexio_uart_transfer_t", "group__flexio__uart.html#ga92f01e08c15b9853ff72059fcbd1c64c", null ],
    [ "FLEXIO_UART_Type", "group__flexio__uart.html#ga30185969a31768efa7b63fe6abda7b95", null ],
    [ "_flexio_uart_bit_count_per_char", "group__flexio__uart.html#gab9e78879dcbbeda98283f2ab8914b501", [
      [ "kFLEXIO_UART_7BitsPerChar", "group__flexio__uart.html#ggab9e78879dcbbeda98283f2ab8914b501ad9818673f2a8abacdb73e6f323fa4c42", null ],
      [ "kFLEXIO_UART_8BitsPerChar", "group__flexio__uart.html#ggab9e78879dcbbeda98283f2ab8914b501aa2563f1b9bbacb425bd892eedda0a161", null ],
      [ "kFLEXIO_UART_9BitsPerChar", "group__flexio__uart.html#ggab9e78879dcbbeda98283f2ab8914b501a8f9d374fa26cfa27dff950fca3e404a5", null ]
    ] ],
    [ "_flexio_uart_interrupt_enable", "group__flexio__uart.html#gaacbc60527c13c7135ab8cdeb379e72fb", [
      [ "kFLEXIO_UART_TxDataRegEmptyInterruptEnable", "group__flexio__uart.html#ggaacbc60527c13c7135ab8cdeb379e72fba41d4cc3f3cf42008e68fe819a9a3da14", null ],
      [ "kFLEXIO_UART_RxDataRegFullInterruptEnable", "group__flexio__uart.html#ggaacbc60527c13c7135ab8cdeb379e72fba8228cbdfa6b84d76cd2e658ae4df09c0", null ]
    ] ],
    [ "_flexio_uart_status", "group__flexio__uart.html#ga2b22d3ab9c2d22eea927ee858017f1df", [
      [ "kStatus_FLEXIO_UART_TxBusy", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa741e184e1ca8ef870d70da2be537a6ab", null ],
      [ "kStatus_FLEXIO_UART_RxBusy", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa8dcfa64158a113e9ed598ac23c9df021", null ],
      [ "kStatus_FLEXIO_UART_TxIdle", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa828da21609507716299bfc8640c57ec3", null ],
      [ "kStatus_FLEXIO_UART_RxIdle", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa451ebbdc82bffc6c0205c7c9bd539046", null ],
      [ "kStatus_FLEXIO_UART_ERROR", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa3b7dca7a2a8364d24c686bbfc22aa2bc", null ],
      [ "kStatus_FLEXIO_UART_RxRingBufferOverrun", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfa565cdecf3ec56df0f889e2e49d31b34f", null ],
      [ "kStatus_FLEXIO_UART_RxHardwareOverrun", "group__flexio__uart.html#gga2b22d3ab9c2d22eea927ee858017f1dfab892c50df6c586138fe1b37fde07e4ca", null ]
    ] ],
    [ "_flexio_uart_status_flags", "group__flexio__uart.html#gab80096f9e757f4083565dd183ce8c491", [
      [ "kFLEXIO_UART_TxDataRegEmptyFlag", "group__flexio__uart.html#ggab80096f9e757f4083565dd183ce8c491a8fd298132aa5ee69800dfba7a224a252", null ],
      [ "kFLEXIO_UART_RxDataRegFullFlag", "group__flexio__uart.html#ggab80096f9e757f4083565dd183ce8c491a3bc49d5b480f3a37acfcf82234c6f48b", null ],
      [ "kFLEXIO_UART_RxOverRunFlag", "group__flexio__uart.html#ggab80096f9e757f4083565dd183ce8c491a139fb91d122113f9fde834253d930e26", null ]
    ] ],
    [ "FLEXIO_UART_ClearStatusFlags", "group__flexio__uart.html#ga22b879f2d9e08524999a98c7a743c3b0", null ],
    [ "FLEXIO_UART_Deinit", "group__flexio__uart.html#ga641ed5c6b8588064d82e5690e1994724", null ],
    [ "FLEXIO_UART_DisableInterrupts", "group__flexio__uart.html#gaf4e18aa7772ae63d2eef7030cfa67175", null ],
    [ "FLEXIO_UART_EnableInterrupts", "group__flexio__uart.html#ga7f48f0a283e6458db7ff72c433e8a325", null ],
    [ "FLEXIO_UART_GetDefaultConfig", "group__flexio__uart.html#gab705f673f07da7b1b385be7edfd2385e", null ],
    [ "FLEXIO_UART_GetStatusFlags", "group__flexio__uart.html#gaefea3702f5a53a82246aaba191605716", null ],
    [ "FLEXIO_UART_Init", "group__flexio__uart.html#ga8c9e0ca8c3517e21a27f7710d7d4f580", null ],
    [ "FLEXIO_UART_ReadBlocking", "group__flexio__uart.html#gae918075d3d85386b3a7a81fa0b77415a", null ],
    [ "FLEXIO_UART_TransferAbortReceive", "group__flexio__uart.html#ga3530ff683b0a4a0c2c2822c1e3626aab", null ],
    [ "FLEXIO_UART_TransferAbortSend", "group__flexio__uart.html#ga141086618b4642de97e46fb92ce297be", null ],
    [ "FLEXIO_UART_TransferCreateHandle", "group__flexio__uart.html#gadf3c35f0256cb25b15cb4005393b3431", null ],
    [ "FLEXIO_UART_TransferGetReceiveCount", "group__flexio__uart.html#ga3bc3658a7fb5825e12d2a74e879b9930", null ],
    [ "FLEXIO_UART_TransferGetSendCount", "group__flexio__uart.html#ga3e5937c17d139c33470e80c33db082bd", null ],
    [ "FLEXIO_UART_TransferHandleIRQ", "group__flexio__uart.html#ga3c30d66f4471bfebd2021a8a3f1a1f04", null ],
    [ "FLEXIO_UART_TransferReceiveNonBlocking", "group__flexio__uart.html#gab42bbc26c0a6a8186d7b0d7373861bd4", null ],
    [ "FLEXIO_UART_TransferSendNonBlocking", "group__flexio__uart.html#gab1b90ca93c8e65eac0e1e62ce93e3b9d", null ],
    [ "FLEXIO_UART_TransferStartRingBuffer", "group__flexio__uart.html#ga1c52d22628dd2ed7e843fc1cd5fb304c", null ],
    [ "FLEXIO_UART_TransferStopRingBuffer", "group__flexio__uart.html#gaaabdc1cafc996c709cb5fc29b5de31bc", null ],
    [ "FLEXIO_UART_WriteBlocking", "group__flexio__uart.html#ga45a07e6f7d7b74ee3d5e461ce54cde32", null ]
];